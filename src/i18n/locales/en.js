/*
 * English UI strings — this is the reference language and the fallback for
 * any key missing from another language.
 *
 * Project and blog content is NOT here: English project/post text stays in
 * src/data/projects.js and src/data/posts.js. Other languages override
 * individual fields there (see the `projects` / `posts` sections of de.js).
 *
 * Use {name}-style placeholders for values inserted at runtime, e.g.
 * t('work.screenshotAlt', { name: project.name }).
 */
export default {
    meta: {
        title: 'Binam Nepal — React Developer',
        description:
            'Binam Nepal is a web developer based in Kathmandu, Nepal, building fast, responsive, production-ready web applications with React, Tailwind CSS and modern frontend tooling.',
    },

    // BCP-47 tag used for date formatting
    locale: 'en-US',

    nav: {
        skipToContent: 'Skip to content',
        mainLabel: 'Main navigation',
        backToTop: 'Binam Nepal — back to top',
        about: 'About',
        skills: 'Skills',
        work: 'Work',
        services: 'Services',
        notes: 'Notes',
        contact: 'Contact',
        switchToLight: 'Switch to light mode',
        switchToDark: 'Switch to dark mode',
        openMenu: 'Open navigation menu',
        closeMenu: 'Close navigation menu',
        language: 'Language',
    },

    header: {
        portraitAlt: 'Portrait of Binam Nepal',
        available: 'Available for work',
        greeting: "Hi, I'm",
        titleLine1: 'Building modern',
        titleHighlight: 'web experiences',
        intro:
            'I design and develop fast, scalable, and user-focused web applications using React and modern technologies. Based in Kathmandu, working with clients worldwide.',
        hireMe: 'Hire Me',
        downloadCv: 'Download CV',
        // Point `cvFile` at a translated PDF in /public/assets when you have one.
        cvFile: '/assets/Binam%20nepal%20CV.pdf',
        cvFilename: 'Binam-Nepal-CV.pdf',
    },

    about: {
        eyebrow: 'Introduction',
        title: 'About Me',
        photoAlt: 'Binam Nepal at his desk',
        intro:
            "I'm a web developer based in Kathmandu, focused on building scalable and high-performance applications using React and modern frontend technologies. I care deeply about clean code, UI/UX, and production-level execution.",
        highlights: {
            languages: {
                name: 'Languages',
                description: 'HTML, CSS, JavaScript, React, Tailwind CSS',
            },
            education: {
                name: 'Education',
                description: 'Bachelor in Information Technology',
            },
            projects: {
                name: 'Projects',
                // Keep this honest — it should match the projects in src/data/projects.js.
                description: 'React frontends and Django REST APIs',
            },
        },
        toolsTitle: 'Tools I Use',
    },

    skills: {
        eyebrow: 'What I work with',
        title: 'Skills & Tools',
        categories: {
            frontend: 'Frontend',
            backend: 'Backend & Data',
            tools: 'Tools',
        },
    },

    work: {
        eyebrow: 'My portfolio',
        title: 'Featured Work',
        intro:
            'A selection of projects that highlight my experience building responsive, user-focused, performance-driven applications.',
        screenshotAlt: 'Screenshot of {name}',
        liveDemo: 'Live demo',
        code: 'Code',
        caseStudy: 'Case study',
        seeMore: 'See more on GitHub',
    },

    services: {
        eyebrow: 'What I offer',
        title: 'My Services',
        intro:
            'Based in Kathmandu, I build fast, responsive, and visually appealing interfaces that deliver great user experiences.',
        items: {
            development: {
                name: 'Web Development',
                description:
                    'Production-ready React applications — component architecture, routing, API integration, and performance tuning.',
            },
            webDesign: {
                name: 'Web Design',
                description:
                    'Visually strong, responsive interfaces that prioritise usability and carry a consistent brand identity.',
            },
            uiux: {
                name: 'UI/UX Design',
                description:
                    'Mapping the user journey and interaction patterns to solve complex problems with simple, obvious flows.',
            },
        },
    },

    testimonials: {
        eyebrow: 'Kind words',
        title: 'Testimonials',
        quoteOpen: '\u201C',
        quoteClose: '\u201D',
    },

    notes: {
        eyebrow: 'Writing',
        title: 'Notes',
        readNote: 'Read note',
        backToNotes: 'Back to notes',
    },

    contact: {
        eyebrow: 'Connect with me',
        title: 'Get in touch',
        intro:
            "I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you.",
        sideTitle: "Let's talk about everything!",
        sideText: "Don't like forms? Email me directly or find me on my social handles.",
        location: 'Kathmandu, Nepal',
        nameLabel: 'Name',
        namePlaceholder: 'Name',
        emailLabel: 'Email',
        emailPlaceholder: 'Email',
        messageLabel: 'Your message',
        messagePlaceholder: 'Your Message',
        send: 'Send message',
        sending: 'Sending…',
        errors: {
            nameShort: 'That name looks too short',
            nameRequired: 'Name is required',
            emailInvalid: 'Please enter a valid email',
            emailRequired: 'Email is required',
            messageShort: 'Message must be at least 10 characters',
            messageRequired: 'Message is required',
        },
        status: {
            notConfigured: 'Form is not configured yet. Email me directly at binamnepal173@gmail.com.',
            success: "Thanks! Your message is on its way — I'll reply soon.",
            failed: 'Something went wrong. Please try again.',
            network: 'Could not send right now. Please email binamnepal173@gmail.com instead.',
        },
    },

    footer: {
        backToTop: 'Back to top',
        rights: 'All rights reserved.',
    },

    project: {
        backToWork: 'Back to work',
        screenshotAlt: 'Screenshot of {name}',
        liveDemo: 'Live demo',
        viewCode: 'View code',
        role: 'Role',
        problem: 'The problem',
        approach: 'My approach',
        result: 'Result',
    },

    notFound: {
        title: 'Page not found',
        text: "The page you're looking for doesn't exist or may have moved.",
        backHome: 'Back to home',
    },
};
