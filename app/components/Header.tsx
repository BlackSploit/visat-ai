"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
     <header className="fixed top-0 left-0 w-full z-[50] bg-[rgba(185,9,118,1)] ">
<div
  className="
    grid grid-cols-[1fr_auto_1fr] lg:grid-cols-[0.75fr_1.5fr_0.95fr]
    items-center
    h-21 md:h-21 lg:h-20
    px-10
    w-full
    overflow-visible
  "
>

{/* LOGO */}
<Link
  href="/"
  aria-label="home"
  className="flex items-center h-full shrink-0"
>
  <Image
    src="/images/landscape-logo.png"
    alt="VISAT"
    priority
    width={260}
    height={44}
    sizes="(max-width: 640px) 240px,
           (max-width: 1024px) 260px,
           260px"
    className="
  w-[300px]
  min-w-[200px]
  md:w-[320px]
  md:min-w-[320px]
  lg:w-[260px]
  lg:min-w-[260px]
  h-auto
  object-contain
"



  />
</Link>




    {/* EMPTY CENTER (if menu removed) */}
    <div />

    {/* DESKTOP BUTTONS */}
    <div className="hidden lg:flex items-center justify-end gap-3">
      <Link href="/admission" className="btn-primary text-sm font-primary">
        Apply Now
      </Link>
      <Link href="/contact" className="btn-secondary text-sm">
        Contact
      </Link>
    </div>

    {/* MOBILE BURGER */}
    <button
      aria-label="menu"
      onClick={() => setOpen(true)}
      className="lg:hidden justify-self-end flex flex-col gap-[6px]"
    >
      <span className="w-6 h-[2px] bg-white" />
      <span className="w-6 h-[2px] bg-white" />
      <span className="w-6 h-[2px] bg-white" />
    </button>
  </div>
</header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          fixed inset-0 z-[9998]
          bg-[rgba(185,9,118,1)]
          transition-transform duration-500 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="h-full flex flex-col px-8 py-10">

          {/* TOP */}
          <div className="flex items-center justify-between mb-12">
            <span className="text-lg font-medium">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="text-3xl"
              aria-label="close"
            >
              ✕
            </button>
          </div>

          {/* LINKS */}

          {/* BUTTONS (TOP, VISAT STYLE) */}
          <div className="mt-10 flex flex-col gap-4">
            <Link
              href="/admission"
              onClick={() => setOpen(false)}
              className="btn-primary text-center"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-secondary text-center"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

/* ================= HELPERS ================= */

function DropdownLink({ href, children }: any) {
  return (
    <Link
      href={href}
      className="block px-5 py-3 text-sm hover:bg-white/10 transition"
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, onClick, children }: any) {
  return (
    <Link
      href={href}
      onClick={() => onClick(false)}
      className="border-b border-white/20 pb-3"
    >
      {children}
    </Link>
  );
}
