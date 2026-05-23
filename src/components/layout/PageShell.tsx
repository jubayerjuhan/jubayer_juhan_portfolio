import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

type PageShellProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-[var(--accent)] focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>
      <Navbar />
      <main
        id="main-content"
        tabIndex={-1}
        className={`outline-none pt-16 min-h-[calc(100vh-8rem)] ${className}`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
