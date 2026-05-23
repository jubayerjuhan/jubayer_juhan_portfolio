import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HashScroll from "@/components/layout/HashScroll";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import BlogPreview from "@/components/sections/BlogPreview";
import Testimonials from "@/components/sections/Testimonials";
import Awards from "@/components/sections/Awards";
import WhyMe from "@/components/sections/WhyMe";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-(--accent) focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>
      <Navbar />
      <HashScroll />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <BlogPreview />
        <Testimonials />
        <Awards />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
