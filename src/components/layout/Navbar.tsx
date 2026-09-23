"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { nav, type NavItem } from "@/data/portfolio";
import { Logo } from "@/components/ui/Logo";

function getSectionId(href: string) {
  const hash = href.includes("#") ? href.split("#")[1] : "";
  return hash || "";
}

/** Apple-like ease — smooth deceleration */
const appleEase = [0.25, 0.1, 0.25, 1] as const;

const springDrawer = {
  type: "spring" as const,
  damping: 33,
  stiffness: 290,
  mass: 0.85,
};

const springItem = {
  type: "spring" as const,
  damping: 28,
  stiffness: 320,
  mass: 0.7,
};

const springIcon = {
  type: "spring" as const,
  damping: 22,
  stiffness: 380,
};

function MenuIcon({ open }: { open: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <span className="relative flex h-4 w-[18px] flex-col justify-between" aria-hidden="true">
      <motion.span
        animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={reduceMotion ? { duration: 0.01 } : springIcon}
        className="block h-[1.5px] w-full rounded-full bg-current origin-center"
      />
      <motion.span
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={reduceMotion ? { duration: 0.01 } : { duration: 0.18, ease: appleEase }}
        className="block h-[1.5px] w-full rounded-full bg-current origin-center"
      />
      <motion.span
        animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={reduceMotion ? { duration: 0.01 } : springIcon}
        className="block h-[1.5px] w-full rounded-full bg-current origin-center"
      />
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const isHome = pathname === "/";

  const drawerTransition = reduceMotion
    ? { duration: 0.01 }
    : springDrawer;

  const drawerVariants = {
    closed: { x: "100%" },
    open: {
      x: 0,
      transition: drawerTransition,
    },
    exit: {
      x: "100%",
      transition: reduceMotion
        ? { duration: 0.01 }
        : { ...springDrawer, damping: 36, stiffness: 340 },
    },
  };

  const listVariants = {
    closed: {},
    open: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.055,
        delayChildren: reduceMotion ? 0 : 0.12,
      },
    },
    exit: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.035,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    closed: { x: 36, opacity: 0 },
    open: {
      x: 0,
      opacity: 1,
      transition: reduceMotion ? { duration: 0.01 } : springItem,
    },
    exit: {
      x: 20,
      opacity: 0,
      transition: reduceMotion ? { duration: 0.01 } : { duration: 0.22, ease: appleEase },
    },
  };

  const headerLabelVariants = {
    closed: { opacity: 0, y: -6 },
    open: {
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0.01 }
        : { delay: 0.08, duration: 0.35, ease: appleEase },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.15 },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);

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

  useEffect(() => {
    document.body.classList.toggle("nav-menu-open", mobileOpen);
    return () => document.body.classList.remove("nav-menu-open");
  }, [mobileOpen]);

  // Close the mobile menu on route change (adjust state during render, not in an effect)
  const [menuPathname, setMenuPathname] = useState(pathname);
  if (menuPathname !== pathname) {
    setMenuPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const handleSectionNav = (href: string) => {
    setMobileOpen(false);
    const sectionId = getSectionId(href);
    if (!sectionId) return;

    if (isHome) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
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

  const linkClass = (active: boolean, mobile = false) => {
    if (mobile) {
      return `block w-full text-left py-3.5 text-[1.35rem] font-semibold tracking-tight transition-colors duration-300 ${
        active
          ? "text-[var(--text-primary)]"
          : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
      }`;
    }
    return `relative px-3.5 py-2 text-[13px] font-medium tracking-tight transition-colors duration-300 ${
      active
        ? "text-[var(--text-primary)]"
        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
    }`;
  };

  const renderDesktopLink = (item: NavItem) => {
    const active = isNavActive(item);
    const content = (
      <>
        {item.label}
        <AnimatePresence>
          {active && (
            <motion.span
              layoutId="nav-active-indicator"
              initial={{ opacity: 0, scaleX: 0.6 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0.6 }}
              transition={reduceMotion ? { duration: 0.01 } : { duration: 0.35, ease: appleEase }}
              className="absolute bottom-1 left-3.5 right-3.5 h-px bg-[var(--text-primary)]/50 rounded-full origin-center"
            />
          )}
        </AnimatePresence>
      </>
    );

    if (item.isPage) {
      return (
        <Link href={item.href} className={linkClass(active)} aria-current={active ? "page" : undefined}>
          {content}
        </Link>
      );
    }

    return (
      <button
        type="button"
        onClick={() => handleSectionNav(item.href)}
        className={linkClass(active)}
        aria-current={active ? "page" : undefined}
      >
        {content}
      </button>
    );
  };

  const renderMobileLink = (item: NavItem) => {
    const active = isNavActive(item);

    if (item.isPage) {
      return (
        <Link
          href={item.href}
          onClick={() => setMobileOpen(false)}
          className={linkClass(active, true)}
          aria-current={active ? "page" : undefined}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <button
        type="button"
        onClick={() => handleSectionNav(item.href)}
        className={linkClass(active, true)}
        aria-current={active ? "page" : undefined}
      >
        {item.label}
      </button>
    );
  };

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(250, 250, 249, 0.92)" : "rgba(250, 250, 249, 0.8)",
        }}
        transition={{ duration: 0.45, ease: appleEase }}
        className={`fixed top-0 left-0 right-0 z-50 nav-glass ${scrolled ? "nav-glass-scrolled" : ""}`}
        role="banner"
      >
        <nav
          className="container-width relative flex h-[52px] md:h-14 items-center justify-between"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="relative z-10 text-[15px] font-semibold tracking-tight text-[var(--text-primary)] hover:opacity-80 transition-opacity duration-300"
            aria-label="Home"
          >
            <Logo size={26} />
          </Link>

          <ul
            className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-0.5"
            role="list"
          >
            {nav.map((item) => (
              <li key={item.href}>{renderDesktopLink(item)}</li>
            ))}
          </ul>

          <div className="flex items-center gap-2 relative z-10">
            <motion.button
              type="button"
              onClick={() => handleSectionNav("/#contact")}
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              transition={springIcon}
              className="hidden md:inline-flex items-center px-4 py-1.5 rounded-full text-[13px] font-semibold bg-[var(--text-primary)] text-[var(--bg-base)] hover:opacity-90 transition-opacity duration-300"
            >
              Hire Me
            </motion.button>

            <motion.button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              whileTap={reduceMotion ? undefined : { scale: 0.92 }}
              transition={springIcon}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-full bg-[var(--overlay)] text-[var(--text-primary)] border border-[var(--overlay-border)] hover:bg-[var(--overlay-border)] transition-colors duration-300"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <MenuIcon open={mobileOpen} />
            </motion.button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={
                reduceMotion
                  ? { duration: 0.01 }
                  : { duration: 0.45, ease: appleEase }
              }
              className="fixed inset-0 z-[60] nav-backdrop md:hidden"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            />

            <motion.aside
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="exit"
              style={{ willChange: "transform" }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[min(88vw,340px)] nav-drawer md:hidden flex flex-col"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between h-[52px] px-6 border-b border-[var(--border)] shrink-0">
                <motion.span
                  variants={headerLabelVariants}
                  initial="closed"
                  animate="open"
                  exit="exit"
                  className="text-[13px] font-medium text-[var(--text-muted)] tracking-wide"
                >
                  Menu
                </motion.span>
                <motion.button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  whileTap={reduceMotion ? undefined : { scale: 0.92 }}
                  transition={springIcon}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--overlay)] text-[var(--text-primary)] border border-[var(--overlay-border)] hover:bg-[var(--overlay-border)] transition-colors duration-300"
                  aria-label="Close menu"
                >
                  <MenuIcon open />
                </motion.button>
              </div>

              <nav className="flex-1 overflow-y-auto overflow-x-hidden px-6 py-8">
                <motion.ul
                  variants={listVariants}
                  initial="closed"
                  animate="open"
                  exit="exit"
                  className="flex flex-col"
                  role="list"
                >
                  {nav.map((item) => (
                    <motion.li key={item.href} variants={itemVariants}>
                      {renderMobileLink(item)}
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="exit"
                  className="mt-10 pt-8 border-t border-[var(--border)]"
                >
                  <motion.button
                    type="button"
                    onClick={() => handleSectionNav("/#contact")}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    transition={springIcon}
                    className="w-full py-3.5 rounded-full text-[15px] font-semibold bg-[var(--text-primary)] text-[var(--bg-base)] hover:opacity-90 transition-opacity duration-300"
                  >
                    Hire Me
                  </motion.button>
                </motion.div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
