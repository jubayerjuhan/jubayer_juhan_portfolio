"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, personal, type NavItem } from "@/data/portfolio";

function getSectionId(href: string) {
  const hash = href.includes("#") ? href.split("#")[1] : "";
  return hash || "";
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHome) return;

      const sections = nav
        .filter((item) => !item.isPage)
        .map((item) => getSectionId(item.href))
        .filter(Boolean);

      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleSectionNav = (href: string) => {
    setMobileOpen(false);
    const sectionId = getSectionId(href);

    if (!sectionId) return;

    if (isHome) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    router.push(`/#${sectionId}`);
  };

  const isNavActive = (item: NavItem) => {
    if (item.isPage) {
      return pathname === item.href || pathname.startsWith(`${item.href}/`);
    }
    if (!isHome) return false;
    return activeSection === getSectionId(item.href);
  };

  const renderNavButton = (item: NavItem) => {
    const isActive = isNavActive(item);

    if (item.isPage) {
      return (
        <Link
          href={item.href}
          onClick={() => setMobileOpen(false)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            isActive
              ? "text-[var(--accent)] bg-[var(--accent-subtle)]"
              : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]"
          }`}
          aria-current={isActive ? "page" : undefined}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <button
        type="button"
        onClick={() => handleSectionNav(item.href)}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          isActive
            ? "text-[var(--accent)] bg-[var(--accent-subtle)]"
            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]"
        }`}
        aria-current={isActive ? "page" : undefined}
      >
        {item.label}
      </button>
    );
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--bg-base)]/90 backdrop-blur-md border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <nav
          className="container-width flex items-center justify-between h-16"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="font-mono text-sm font-semibold tracking-tight text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-200"
            aria-label="Home"
          >
            <span className="text-[var(--accent)]">{"<"}</span>
            {personal.name.split(" ")[0].toLowerCase()}
            <span className="text-[var(--accent)]">{"/>"}</span>
          </Link>

          <ul className="hidden md:flex items-center gap-1" role="list">
            {nav.map((item) => (
              <li key={item.href}>{renderNavButton(item)}</li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleSectionNav("/#contact")}
              className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-[var(--accent)] text-white text-sm font-semibold hover:bg-[var(--accent-hover)] transition-all duration-200 hover:shadow-[0_0_20px_var(--accent-glow)]"
            >
              Hire Me
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[var(--bg-base)]/95 backdrop-blur-md border-b border-[var(--border)] md:hidden"
          >
            <nav className="container-width py-4" aria-label="Mobile navigation">
              <ul className="flex flex-col gap-1" role="list">
                {nav.map((item) => (
                  <li key={item.href}>
                    {item.isPage ? (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-all duration-200"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleSectionNav(item.href)}
                        className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-all duration-200"
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
                <li className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleSectionNav("/#contact")}
                    className="block w-full text-center px-4 py-3 rounded-lg bg-[var(--accent)] text-white text-sm font-semibold hover:bg-[var(--accent-hover)] transition-colors"
                  >
                    Hire Me
                  </button>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
