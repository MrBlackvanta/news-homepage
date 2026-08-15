"use client";

import { CloseIcon, Logo, MenuIcon } from "@/components/icons";
import { navLinks } from "@/lib/content";
import { useEffect, useRef, useState } from "react";

const DESKTOP_QUERY = "(min-width: 40rem)";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const toggle = toggleRef.current;
    closeRef.current?.focus();
    document.body.classList.add("v-scroll-lock");

    const close = () => setMenuOpen(false);
    const trapTab = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const stops = panelRef.current.querySelectorAll<HTMLElement>("a, button");
      const first = stops[0];
      const last = stops[stops.length - 1];
      const goingBack = event.shiftKey;

      if (goingBack && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!goingBack && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const desktop = window.matchMedia(DESKTOP_QUERY);
    desktop.addEventListener("change", close);
    document.addEventListener("keydown", trapTab);

    return () => {
      document.body.classList.remove("v-scroll-lock");
      desktop.removeEventListener("change", close);
      document.removeEventListener("keydown", trapTab);
      toggle?.focus();
    };
  }, [menuOpen]);

  return (
    <header className="v-container flex items-center justify-between pt-7 pb-8 lg:pt-22 lg:pb-14">
      <a href="#" aria-label="W. home">
        <Logo className="w-11.25 lg:w-16" />
      </a>

      <nav aria-label="Main" className="hidden sm:block">
        <ul className="flex gap-10 text-dark-grayish-blue">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a className="v-link-red block" href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        ref={toggleRef}
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen(true)}
        className="-my-2 py-2 sm:hidden"
      >
        <MenuIcon className="w-10" />
        <span className="sr-only">Open menu</span>
      </button>

      <div
        id="mobile-menu"
        inert={!menuOpen}
        onClick={(event) => {
          if (event.target === event.currentTarget) setMenuOpen(false);
        }}
        className={`fixed inset-0 z-10 flex bg-very-dark-blue/50 transition-[opacity,visibility] duration-300 motion-reduce:transition-none sm:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
          className={`ml-auto w-64 bg-off-white px-6 pt-6.75 transition-transform duration-300 motion-reduce:transition-none ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={() => setMenuOpen(false)}
            className="ml-auto block"
          >
            <CloseIcon className="w-7.5" />
            <span className="sr-only">Close menu</span>
          </button>

          <nav aria-label="Main" className="mt-18.75">
            <ul className="text-subtitle">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    className="v-link-red block py-3"
                    href={href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
