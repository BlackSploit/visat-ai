"use client";

import { FormEvent, useMemo, useState } from "react";

const AUTH_KEY = "visat_auth";
const SHARED_PASSWORD = "VISAT@RAGAI";
const VISAT_EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@visat\.ac\.in$/;

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [authenticated, setAuthenticated] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.localStorage.getItem(AUTH_KEY) === "true";
  });

  const emailIsValid = useMemo(() => VISAT_EMAIL_REGEX.test(email.trim()), [email]);

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();

    if (!VISAT_EMAIL_REGEX.test(normalizedEmail)) {
      setError("Use a valid VISAT Instituitional email address.");
      return;
    }

    if (password !== SHARED_PASSWORD) {
      setError("Invalid password.");
      return;
    }

    window.localStorage.setItem(AUTH_KEY, "true");
    setAuthenticated(true);
    setError("");
  }

  function handleLogout() {
    window.localStorage.removeItem(AUTH_KEY);
    setAuthenticated(false);
    setEmail("");
    setPassword("");
    setError("");
  }

if (!authenticated) {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="border border-white/50 rounded-2xl p-8 bg-black">
          
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-medium tracking-tight">
              VISAT Login
            </h1>
            <p className="text-sm text-neutral-500 mt-2">
              Continue with your institutional email
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            
            <div>
              <label htmlFor="email" className="block text-sm text-neutral-400 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                placeholder="provided mail ID"
                className="w-full bg-black border border-white/15 rounded-lg px-3 py-2.5 text-sm outline-none transition focus:border-white"
                required
              />
              {email.length > 0 && !emailIsValid && (
                <p className="text-xs text-neutral-500 mt-2">
                  Use your official VISAT email address
                </p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm text-neutral-400 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError("");
                }}
                placeholder="Enter password"
                className="w-full bg-black border border-white/15 rounded-lg px-3 py-2.5 text-sm outline-none transition focus:border-white"
                required
              />
            </div>

            {error && (
              <p className="text-sm text-neutral-400">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-white text-black rounded-lg py-2.5 text-sm font-medium transition hover:opacity-90"
            >
              Sign in
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-neutral-600 mt-6">
          VISAT Internal Access
        </p>
      </div>
    </div>
  );
}



  return (
    <>
      <div className="fixed top-5 right-1 z-50">
        {/* <button
          onClick={handleLogout}
          className="rounded-sm border border-white/25 bg-black/20 text-white px-1 py-1.5 text-sm hover:bg-black/70"
        >
          Logout
        </button> */}
      </div>
      {children}
    </>
  );
}
