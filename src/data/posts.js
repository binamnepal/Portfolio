/*
 * Notes / blog posts. Add a new object to this array to publish a post —
 * it will automatically appear on the homepage and get its own page at
 * /notes/:slug. `body` is an array of paragraphs (plain strings, no HTML
 * needed) so it's easy to write without touching JSX. An item can also be
 * an object { heading, list: [...] } to render a heading with a bullet list.
 *
 * This is the English version. To translate a post, add an entry under
 * `posts[<slug>]` in src/i18n/locales/de.js (title, excerpt, body).
 */
export const POSTS = [
    {
        slug: 'my-todo-list',
        title: "My to-do list: what I'm building and fixing next",
        date: '2026-11-02',
        excerpt:
            "What's on my desk right now: a WhatsApp AI agent heading to its first pilot, a hiring app to finish, flaky APIs to tame, and a security checklist I keep coming back to.",
        body: [
            'A running list of what I am working on, pulled straight from my current projects. Writing it down in public keeps me honest, and I will cross items off as they ship.',
            {
                heading: 'WhatsApp AI agent for study-abroad consultancies',
                list: [
                    "Move from Meta's free test number to a real number with a permanent access token.",
                    "Send approved templates once WhatsApp's 24-hour reply window closes.",
                    'Add usage limits and per-client billing counters.',
                    'Build a staff dashboard and tenant-scoped staff logins.',
                    'Deploy on Render with Neon Postgres and a keep-alive ping, then regenerate every test secret before going live.',
                    'Run the first free pilot with a real consultancy.',
                ],
            },
            {
                heading: 'Fix what is flaky',
                list: [
                    'Pick a supported Groq chat model and add a fallback so one bad model name cannot take the bot down.',
                    "Make the bot reply in one language and script, matching the student's latest message instead of mixing English and Devanagari.",
                    'Stop the free-tier streaming API from falling asleep on the anime app.',
                    'Replace the broken upstream API in the anime streaming project and finish the mobile layout.',
                ],
            },
            {
                heading: 'Finish the hiring app',
                list: [
                    'Payments through eSewa, with prices in NPR.',
                    'Hours of work on bookings.',
                    'Separate customer and worker dashboards.',
                    'A forgot-password flow.',
                    'A richer profile page: editable photo, contact info and verification badges.',
                ],
            },
            {
                heading: 'Security habits I keep coming back to',
                list: [
                    'Add Subresource Integrity hashes to every CDN script.',
                    'Sanitize any HTML injected from AJAX responses with DOMPurify.',
                    'Ship a Content Security Policy.',
                    'Upgrade outdated libraries before they become the weak link.',
                ],
            },
            {
                heading: 'This site',
                list: [
                    'Write more notes like this one.',
                    'Translate each new note into German and French.',
                ],
            },
        ],
    },
    {
        slug: 'rebuilding-this-portfolio',
        title: 'Rebuilding this portfolio: what was actually broken',
        date: '2026-09-20',
        excerpt:
            'A punch list of what I found wrong with the first version of this site — fonts that never loaded, a fake CAPTCHA, dead links — and how I fixed each one.',
        body: [
            "When I first shipped this site, it looked fine to me but had several bugs I couldn't see just by clicking around casually.",
            'The custom fonts declared in the Tailwind config were never actually loaded from Google Fonts, so every heading was silently falling back to the browser default. The navigation used plain anchor tags instead of React Router links, so every click did a full page reload and killed the smooth-scroll library. The contact form looked real but used a public CAPTCHA test key that always passes, and submissions were only ever saved to localStorage — never actually sent anywhere.',
            'The fix was to treat the site as one continuous page instead of five separate routes, wire the contact form to an actual email delivery service, load the fonts properly, and delete a fair amount of unused code (an entire Redux auth slice that was never used) and unused dependencies that were bloating the build.',
            "The biggest lesson: things can look correct while being functionally broken. A button that does nothing, or a font that silently fails, doesn't throw an error — it just quietly makes the site worse. Worth actually clicking every link and testing every form before calling a project done.",
        ],
    },
];

export function getPostBySlug(slug) {
    return POSTS.find((post) => post.slug === slug);
}
