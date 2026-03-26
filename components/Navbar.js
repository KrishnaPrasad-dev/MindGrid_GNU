"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "yes") {
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full flex justify-center mt-6">
      <div className="w-[95%] max-w-6xl 
        bg-white/5 backdrop-blur-xl 
        border border-white/10 
        shadow-2xl 
        rounded-2xl 
        px-8 py-4 
        flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-xl md:text-2xl font-bold tracking-wide">
            MindGrid
          </h1>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/members">Members</NavLink>
          <NavLink href="/announcements">Announcements</NavLink>
          <NavLink href="/finance">Finance</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/about">About</NavLink>

          {!loggedIn ? (
            <Link
              href="/signup"
              className="px-4 py-2 rounded-xl bg-cyan-400 text-black font-semibold hover:scale-105 transition"
            >
              Join
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white hover:text-black transition"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="relative group transition"
    >
      {children}
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all group-hover:w-full"></span>
    </Link>
  );
}