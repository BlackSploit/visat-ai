"use client";

import { FormEvent, useState } from "react";

const AUTH_KEY = "visat_auth";

/* Internal validation rule (hidden from UI) */
const ACCESS_REGEX = /^VIT\d{2}[A-Za-z]{2,3}\d{3}$/;

export default function AuthGate({
  children,
}: {
  children: React.ReactNode;
}) {

  const [accessId, setAccessId] = useState("");

  const [error, setError] = useState("");

  const [authenticated, setAuthenticated] = useState(() => {

    if (typeof window === "undefined") return false;

    return localStorage.getItem(AUTH_KEY) === "true";

  });



  function handleLogin(event: FormEvent<HTMLFormElement>) {

    event.preventDefault();

    const normalized = accessId.trim().toUpperCase();


    if (!ACCESS_REGEX.test(normalized)) {

      setError("Unable to sign in.");

      return;

    }


    localStorage.setItem(AUTH_KEY, "true");

    setAuthenticated(true);

    setError("");

  }



  function handleLogout() {

    localStorage.removeItem(AUTH_KEY);

    setAuthenticated(false);

    setAccessId("");

    setError("");

  }



  if (!authenticated) {

    return (

      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

        <div className="w-full max-w-sm">

          <div className="border border-white/40 rounded-2xl p-8 bg-black">

            

            <div className="mb-8 text-center">

              <h1 className="text-2xl font-medium tracking-tight">

                VISAT Access

              </h1>

              <p className="text-sm text-neutral-500 mt-2">

                Enter your credentials to continue

              </p>

            </div>



            <form onSubmit={handleLogin} className="space-y-5">



              <div>

                <label className="block text-sm text-neutral-400 mb-2">

                  University Register Number

                </label>



                <input

                  type="text"

                  value={accessId}

                  onChange={(e) => {

                    setAccessId(e.target.value.toUpperCase());

                    if (error) setError("");

                  }}

                  placeholder="Enter your ID"

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

                className="w-full bg-white text-black rounded-lg py-2.5 text-sm font-medium hover:opacity-90"

              >

                Continue

              </button>



            </form>

          </div>



          <p className="text-center text-xs text-neutral-600 mt-6">

            Internal System

          </p>



        </div>

      </div>

    );

  }



  return (

    <>

      {/* Optional logout */}

      {/*

      <button

        onClick={handleLogout}

        className="fixed top-5 right-5 text-white"

      >

        Logout

      </button>

      */}



      {children}

    </>

  );

}
