/*
 * Single source of truth for projects. Work.jsx (the homepage grid) and
 * ProjectDetail.jsx (the /work/:slug case study page) both read from here,
 * so you only ever update a project in one place.
 *
 * Leave `live` or `code` as an empty string and that button just won't
 * render — no dead links. Leave `role`, `problem`, `approach`, `result`
 * as the placeholder text until you fill in the real specifics; they're
 * only used on the case study page, not the homepage card.
 */
export const PROJECTS = [
    {
        slug: 'pasupati-planners',
        name: 'Pasupati Planners',
        image: '/assets/work-1.png',
        description:
            'An event reservation platform where customers browse packages, check availability and book events online.',
        stack: ['React', 'Tailwind CSS', 'Vite'],
        live: 'https://event-reservation-lake.vercel.app/',
        code: '', // TODO: add the GitHub repo URL
        role: 'TODO: your role — e.g. "Sole developer" or "Frontend, in a team of 2"',
        problem:
            'TODO: what problem was this solving? e.g. "Event bookings were being managed over phone calls and a paper diary, causing double-bookings."',
        approach:
            'TODO: 2-3 sentences on your technical approach — key decisions, libraries chosen and why, anything tricky you solved.',
        result:
            'TODO: the outcome — e.g. "Reduced booking errors" or "Used by X customers" — or drop this line if there is no measurable result yet.',
    },
    {
        slug: 'yoyo-home-service',
        name: 'Yoyo Home Service',
        image: '/assets/work-yoyo.png',
        description:
            'A backend platform matching customers with daily workers — plumbers, electricians, cleaners, pet sitters — with bookings, payments and reviews.',
        stack: ['Django', 'Django REST Framework', 'Python'],
        live: '', // TODO: deploy this and add the URL
        code: 'https://github.com/binamnepal/Daily-workers-hiring-system',
        role: 'Backend developer',
        problem:
            'Hiring a daily worker for a household task (plumbing, cleaning, pet care) usually happens informally — by word of mouth or a phone call — with no record of the job, no way to compare workers, and no accountability if something goes wrong.',
        approach:
            'Built as a Django REST Framework API split into six focused apps (accounts, categories, workers, bookings, payments, reviews), each with its own service.py holding the business logic so views stay thin and never touch models directly. The core of the system is a booking status machine — pending → accepted → in_progress → completed, with reject and cancel paths at each stage — enforced entirely in the service layer so a booking can never skip a state or be mutated into an invalid one. Worker search filters by category and city, and a review is only accepted against a completed booking, which keeps the worker\u2019s average rating trustworthy rather than open to drive-by reviews.',
        result:
            'A working, testable API with token authentication, migrations, and a documented endpoint list — the kind of backend a real booking app could be built on top of. The README is explicit about what is still missing (payment gateway integration, geo-distance search, real-time notifications), which is the honest state of an in-progress backend project.',
    },
    {
        slug: 'furever-home',
        name: 'FurEver Home',
        image: '/assets/work-furever.png',
        description:
            'A pet adoption platform for browsing adoptable dogs, cats and other animals by breed, with donation and adopter registration flows.',
        stack: ['React', 'React Router', 'Bootstrap'],
        live: '', // TODO: deploy this and add the URL
        code: 'https://github.com/binamnepal/FurEver-Home',
        role: 'Frontend developer',
        problem:
            'Local pet adoption often happens through scattered Facebook posts with no consistent way to browse what is available, filter by animal type, or learn about care needs before adopting.',
        approach:
            'A multi-page React app (React Router) with dedicated adoption flows per animal type — dogs, cats, and others (rabbits, hamsters, guinea pigs, parrots) — each with its own breed cards and an adoption form. Separate Login, Register and a token-gated Dashboard route lay the groundwork for adopters to track applications, and an Animal Health page and Donation page round out the site beyond just listings.',
        result:
            'A structured, browsable adoption catalog rather than a single scrolling feed. The project is still frontend-only — the login/register/dashboard flow currently reads from localStorage rather than a real backend, which is the natural next step (pairing it with something like the auth pattern already built for Yoyo Home Service).',
    },
];

export function getProjectBySlug(slug) {
    return PROJECTS.find((project) => project.slug === slug);
}
