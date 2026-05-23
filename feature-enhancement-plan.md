# Portfolio Feature Enhancement Plan

This document outlines the plan for adding new features to the portfolio website.

## Feature Implementation Order

1.  **Downloadable PDF Resume:**
    *   [ ] Add a resume PDF file to the `public` directory.
    *   [ ] Add a "Download Resume" button to the `Navbar` component.
    *   [ ] Link the button to the PDF file.
    *   [ ] Style the button to match the site's aesthetic.

2.  **Interactive Contact Form:**
    *   [ ] Create a new API route in `src/app/api/contact` to handle form submissions.
    *   [ ] Set up an email service (e.g., Resend, Nodemailer) to send emails from the API route.
    *   [ ] Update the `Contact` component to include a form with fields (Name, Email, Message).
    *   [ ] Add client-side form validation.
    *   [ ] Implement logic to post form data to the API route and display success/error messages.

3.  **Testimonials Section:**
    *   [ ] Create a new `Testimonials.tsx` component in `src/components/sections/`.
    *   [ ] Add a `testimonials.ts` data file in `src/data/` with placeholder content.
    *   [ ] Implement the UI for displaying testimonials (e.g., a card layout).
    *   [ ] Add the new `Testimonials` component to `src/app/page.tsx`.

4.  **Detailed Project Case Studies:**
    *   [ ] Create a dynamic route for projects: `src/app/projects/[slug]/page.tsx`.
    *   [ ] Expand the project data in `src/data/projects.ts` to include content for the case studies.
    *   [ ] Modify the existing `Projects` component to link each project to its detailed page.
    *   [ ] Design and build the layout for the project case study page.

5.  **Blog/Articles Section:**
    *   [ ] Decide on a content source (e.g., local Markdown files).
    *   [ ] Create a dynamic route for blog posts: `src/app/blog/[slug]/page.tsx`.
    *   [ ] Create a `Blog` section component to display recent posts on the homepage.
    *   [ ] Implement the UI for rendering blog posts from Markdown.
    *   [ ] Add syntax highlighting for code blocks.
