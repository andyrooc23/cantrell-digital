"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const links = [
  ["Work", "/work"],
  ["Services", "/services"],
  ["About", "/about"],
] as const;
export default function SiteHeader() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  function close() {
    dialog.current?.close();
  }
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Link className="wordmark" href="/">
          cantrell<span>digital</span>
          <i aria-hidden="true">✳</i>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
          <Link
            className="button"
            href="/start-project"
            data-event="start_project_clicked"
            data-placement="header"
          >
            Start a project <span aria-hidden="true">↗</span>
          </Link>
        </nav>
        <noscript>
          <nav
            aria-label="Navigation without JavaScript"
            className="fallback-nav"
          >
            {links.map(([label, href]) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
            <Link href="/start-project">Start a project</Link>
          </nav>
          <style>{`.menu-trigger{display:none!important}.header-inner{height:auto!important;min-height:64px;flex-wrap:wrap;padding-block:12px}`}</style>
        </noscript>
        <button
          ref={trigger}
          aria-haspopup="dialog"
          aria-controls="site-menu"
          className="menu-trigger"
          onClick={() => dialog.current?.showModal()}
        >
          Menu <span aria-hidden="true">＋</span>
        </button>
      </div>
      <dialog
        ref={dialog}
        id="site-menu"
        className="mobile-menu"
        aria-label="Site menu"
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls = dialog.current?.querySelectorAll<HTMLElement>(
            "a[href], button:not(:disabled)",
          );
          if (!controls?.length) return;
          const first = controls[0],
            last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }}
        onClose={() => trigger.current?.focus()}
      >
        <div className="menu-top">
          <span className="eyebrow">Cantrell Digital</span>
          <button className="button secondary" onClick={close} autoFocus>
            Close ×
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href], i) => (
            <Link onClick={close} key={href} href={href}>
              <small>0{i + 1}</small>
              {label}
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
          <Link
            onClick={close}
            className="button"
            href="/start-project"
            data-event="start_project_clicked"
            data-placement="mobile-menu"
          >
            Start a project ↗
          </Link>
        </nav>
        <a className="text-link" href="mailto:andrew@cantrelldigital.dev">
          Email the studio
        </a>
      </dialog>
    </header>
  );
}
