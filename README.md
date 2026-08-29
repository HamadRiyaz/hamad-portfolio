# Hamad's Digital Canvas

Professional Portfolio Website — Full Development Prompt
Use the provided portfolio UI reference image as the primary visual design reference. Build a professional, modern, premium developer portfolio website inspired by the exact visual language of the reference, but do not blindly copy it. The final website should feel like a real professional developer portfolio rather than a beginner template.
1. Technology Requirements
Build the entire website using only:
HTML5
CSS3
Vanilla JavaScript
Do not use React, Vue, Angular, Bootstrap, Tailwind, or other frontend frameworks.
Use clean, semantic HTML, well-structured CSS, and modular JavaScript.
Create separate files:
portfolio/
│
├── index.html
├── about.html
├── skills.html
├── projects.html
├── experience.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   └── ...
│
└── assets/
    └── ...
The website must be fully responsive for desktop, tablet, and mobile.
2. Overall Design
Follow the visual direction of the provided reference image:
Dark premium background
Black / deep navy base
Purple and blue gradient accents
Subtle glowing elements
Modern typography
Rounded cards
Thin borders
Soft shadows
Glassmorphism where appropriate
Clean spacing
Strong visual hierarchy
Professional developer aesthetic
Do not overcrowd the interface.
The design should feel:
Modern + Professional + Technical + Premium + Minimal
Avoid excessive gradients, excessive glowing effects, excessive animations, or unnecessary decorative elements.
3. Navigation / Header
Create a fixed or sticky professional header.
Left side:
HR
or a clean personal logo/initials representing Hamad Riyaz.
Right side navigation:
Home
About
Skills
Projects
Experience
Contact
Also include a Download CV button.
The header should:
remain visible while scrolling
have a subtle transparent/glass background
highlight the currently active page
smoothly transition when scrolling
have a mobile hamburger menu
close the mobile menu after selecting a page
Since this is a multi-page website, each navigation item should open its own HTML page.
Do NOT put the entire website into one giant HTML file.
4. HOME PAGE
The Home page should be the strongest visual section.
Create a large hero area inspired by the provided reference.
Left side:
Hi, I'm
Hamad Riyaz
Python Developer | Web Scraping
Data Enthusiast | Frontend Developer
Add a short professional introduction describing that I build web solutions, work with Python and data, create frontend interfaces, and continuously learn new technologies.
Add two primary buttons:
View My Work
Contact Me
Also add social icons/links:
GitHub
LinkedIn
Email
Hero Image
Use my provided personal/profile image when available.
The image should appear professionally integrated into the hero section.
Do NOT simply display the image as a normal rectangular image.
Create a polished presentation such as:
circular/rounded image container
subtle purple/blue glow
thin animated border
soft shadow
subtle floating effect
Important image-load animation
When the Home page first opens, the profile image should appear with a smooth professional entrance animation.
For example:
image starts slightly smaller and transparent
glow appears subtly
image smoothly scales into position
surrounding glow/border becomes visible
The animation should be around 0.8–1.2 seconds.
Do not make it flashy or distracting.
The animation should happen primarily when the page initially loads.
5. Hero Code Card
Inspired by the code card in the reference image, add a small floating developer/code card near the profile image.
It can contain a short code snippet such as:
def build_future():
    learn()
    build()
    improve()
The card should have:
dark glass background
subtle border
rounded corners
syntax-style text colors
small terminal-style dots
Give it a very subtle floating animation.
Do NOT constantly rotate or move the card dramatically.
6. ABOUT PAGE
Create a completely separate:
about.html
The page should contain:
About Me
A professional introduction about Hamad Riyaz.
Mention relevant areas such as:
Data Science
Python
Web Scraping
Frontend Development
Java
Data Structures & Algorithms
Machine Learning
Git/GitHub
Keep the writing professional and authentic.
Do not exaggerate experience or claim expertise that is not established.
Include a profile image on the page.
Create a professional statistics/achievement area such as:
Projects Built
Technologies
GitHub Repositories
Learning Journey
Use only accurate values.
7. SKILLS PAGE
Create:
skills.html
Organize skills into clear categories.
Programming
Python
Java
C++
Web Development
HTML5
CSS3
JavaScript
PHP
Data / Machine Learning
Pandas
NumPy
Matplotlib
Scikit-learn
EDA
Machine Learning
NLP
Computer Science
Data Structures
Algorithms
OOP
Problem Solving
Tools
Git
GitHub
VS Code
Linux
Create visually attractive skill cards.
Each card should have:
technology icon
technology name
short description or category
subtle hover effect
Do not create unnecessary animated progress bars that imply fake percentages.
8. PROJECTS PAGE
Create:
projects.html
This should be one of the most important pages.
Create a professional project grid.
Each project card should contain:
project image/screenshot
project name
short description
technologies used
GitHub button
Live Demo button where available
Example project categories:
All
Web Development
Python
Data / ML
Java
DSA
Other
Use JavaScript to filter projects dynamically without reloading the page.
Project examples
The portfolio should be designed so projects such as these can be added:
Web Scraping Projects
Data Analysis / EDA
Sentiment Analysis
Smart Study Planner
Java OOP Projects
DSA Projects
HTML/CSS/JavaScript Projects
PHP/MySQL Projects
Machine Learning Projects
Networking Projects
Do not invent project details.
Create a reusable project-card structure so I can easily add more projects later.
9. PROJECT DETAILS
When a user clicks a project, provide a professional way to view more information.
Possible implementation:
separate project detail pages
or a clean JavaScript modal
Each detailed project view should contain:
Project Title
Overview
Problem
Solution
Technologies
Key Features
Screenshots
GitHub Repository
Live Demo
Keep the design consistent with the rest of the website.
10. EXPERIENCE / LEARNING PAGE
Create:
experience.html
Instead of pretending to have corporate employment experience, focus this page on my:
academic journey
projects
technical learning
development journey
internships when applicable
milestones
Create a professional vertical timeline.
Example:
Learning
    ↓
Programming
    ↓
Java + OOP
    ↓
DSA
    ↓
Python + Data
    ↓
Machine Learning
    ↓
Web Development
    ↓
Web Scraping
    ↓
Professional Freelancing
Make it visually interesting but clean.
11. CONTACT PAGE
Create:
contact.html
Professional heading:
Let's Work Together
Include:
Email
GitHub
LinkedIn
Fiverr
Contact form
Contact form fields:
Name
Email
Subject
Message
Send Message
Use JavaScript for client-side form validation.
Show appropriate validation messages.
Do not pretend the form actually sends email unless a backend/service is connected.
12. Footer
Create a consistent footer across all pages.
Include:
Hamad Riyaz
Python Developer | Web Scraping | Data | Frontend
Navigation links:
Home
About
Skills
Projects
Contact
Social links:
GitHub
LinkedIn
Fiverr
Email
Add copyright text.
13. Animations
Animations are important, but do not overdo them.
Only use animations where they improve the experience.
Use:
Page Load
Hero text fade/slide in
Profile image entrance animation
subtle card entrance
Scroll
Use subtle reveal animations for:
section headings
project cards
skill cards
timeline items
Use JavaScript IntersectionObserver for scroll-reveal effects.
Hover
Use subtle:
card lift
border glow
button transition
icon movement
image scale
Navigation
Use:
smooth transitions
active page indicator
mobile menu animation
Do NOT use
excessive particles
constant large movements
spinning elements everywhere
excessive parallax
flashing effects
unnecessary loading animations
animations on every single element
The website should feel smooth, not like an animation demo.
14. JavaScript Requirements
Use JavaScript for actual functionality, not just decorative effects.
Implement:
Mobile navigation
Active navigation state
Project filtering
Scroll reveal
Form validation
Back-to-top button
Theme interactions if included
Small UI interactions
Image/load interactions where appropriate
Keep JavaScript clean and modular.
Avoid putting all functionality into one huge function.
15. Responsive Design
The website MUST work properly on:
Desktop
Large professional layout with multiple columns where appropriate.
Tablet
Adapt cards and grids.
Mobile
Use:
hamburger navigation
single-column project cards
properly resized hero section
readable typography
optimized images
comfortable buttons
no horizontal scrolling
Do not simply shrink the desktop design.
Actually redesign layouts where necessary for mobile.
16. Accessibility
Use:
semantic HTML5
proper heading hierarchy
alt text for images
accessible buttons
keyboard-friendly navigation
readable contrast
visible focus states
17. Code Quality
Write professional, maintainable code.
Use:
semantic HTML
CSS variables
reusable CSS classes
organized sections
comments only where useful
clean JavaScript
consistent naming
no unnecessary inline CSS
no unnecessary inline JavaScript
Create reusable components/styles where possible even though we are using vanilla HTML/CSS/JS.
18. Visual Details
Use a color system similar to:
Background: deep black / navy
Primary accent: purple
Secondary accent: blue/cyan
Text: white / light gray
Secondary text: muted gray
Cards: slightly lighter dark background
Borders: subtle dark/light borders
Use gradients sparingly.
The purple/blue glow should mainly emphasize:
buttons
active navigation
profile image
important headings
selected project elements
Do not make every element glow.
19. Professional Feel
The final result should look like a portfolio that a potential Fiverr client could visit and immediately understand:
Who I am
What technologies I use
What I have built
What services I can provide
How to contact me
The portfolio should emphasize actual projects rather than exaggerated claims.
20. Important Development Rule
Build the website section by section and page by page.
Do not generate one giant HTML file.
First establish:
Header
Global CSS
Home
Then build:
About
Skills
Projects
Experience
Contact
All pages must share the same design system and navigation.
The provided reference image is the visual inspiration, but improve it where appropriate to make the final website more polished, responsive, and genuinely usable.
The final result should feel like a premium personal developer portfolio, not a generic AI-generated template.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://devfolio-glow-76.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b8e992fc-0b0e-4180-a794-5982fe57bf44).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
