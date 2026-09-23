/*
 * Notes / blog posts. Add a new object to this array to publish a post —
 * it will automatically appear on the homepage and get its own page at
 * /notes/:slug. `body` is an array of paragraphs (plain strings, no HTML
 * needed) so it's easy to write without touching JSX.
 */
export const POSTS = [
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
    {
        slug: 'template-your-next-post',
        title: 'TODO: replace with your next post',
        date: '2026-01-01',
        excerpt: 'Write a short summary of the post here — this shows on the homepage preview card.',
        body: [
            'Replace this with your first paragraph. A good technical note usually starts with the problem you ran into.',
            'Then explain what you tried, what worked, and what you would do differently next time.',
            'Delete this post entirely, or edit it, before you deploy — it is only here as a template.',
        ],
    },
];

export function getPostBySlug(slug) {
    return POSTS.find((post) => post.slug === slug);
}
