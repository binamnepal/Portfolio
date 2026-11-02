
export const PROJECTS = [
    {
        slug: 'logicpixel-whatsapp-agent',
        name: 'LogicPixel WhatsApp AI Agent',
        image: '/assets/aniraga.png',
        description:
            'A multi-business WhatsApp assistant that answers enquiries 24/7, collects lead details, sorts leads into stages, alerts staff and hands chats over to humans.',
        stack: ['Django', 'Neon Postgres', 'WhatsApp Cloud API', 'django-q2', 'LLM API'],
        live: '',
        code: 'https://github.com/binamnepal/Logic-Pixel-V1',
        role: 'Founder and developer',
        problem:
            'Study-abroad consultancies get a constant stream of WhatsApp enquiries, often outside office hours, and staff lose time answering the same questions and chasing leads by hand.',
        approach:
            "A Django backend receives the official WhatsApp Cloud API webhook, verifies the signature, drops duplicate messages and answers 200 immediately, then handles each message in a django-q2 background task. An AI engine replies and saves the student's details, while lead statuses are set by code, never by the AI. Staff are alerted through Telegram and email, and a take-over button in the admin silences the AI so a person can reply. Each client is its own business record, routed by phone number ID, so one deployment can serve many businesses.",
        result:
            'Working end to end against Meta\'s test number, with the webhook, signature check, deduplication, handover and notifications covered by automated tests. Still in progress: a real number and permanent token, template messages after the 24-hour window, usage limits and a staff dashboard.',
    },
    {
        slug: 'aniraga',
        name: 'Aniraga',
        image: '/assets/work-aniraga.png', // TODO: add a screenshot, e.g. /assets/work-aniraga.png
        description:
            'A full-stack anime site with a browsable catalog, weekly schedule, accounts, watch lists and a video player that falls back between sources automatically.',
        stack: ['React', 'Vite', 'Django REST Framework', 'Node.js', 'AniList API'],
        live: '',
        code: 'https://github.com/binamnepal/Aniraga',
        role: 'Full-stack developer',
        problem:
            'Anime sites tend to be cluttered, and when the upstream streaming API breaks or goes to sleep the whole site goes down with it.',
        approach:
            "The browser talks only to a Django REST backend. Django pulls catalog data from AniList, asks a separate Node API for episodes and stream links, and proxies video so sources that need a Referer header still play. The React frontend has a spotlight carousel, filterable browsing, live search, a weekly schedule in the viewer's own time zone, and an hls.js player that tries the next source and server when one fails, with skip-intro, resume, subtitles and keyboard shortcuts. Accounts use JWT with automatic refresh, and a guest's progress syncs to their account on sign-in.",
        result:
            'A complete app with accounts, watch lists, history and comments, plus a written deployment guide covering Postgres, the Django API, the Node API and a static frontend host.',
    },
    {
        slug: 'pasupati-planners',
        name: 'Pasupati Planners',
        image: '/assets/work-1.png',
        description:
            'An event reservation platform where customers browse packages, check availability and book events online.',
        stack: ['React', 'Tailwind CSS', 'Vite'],
        live: 'https://event-reservation-lake.vercel.app/',
        code: 'https://github.com/binamnepal/Event-Reservation',
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
        image: '/assets/Yoyo-Home.png',
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
        image: '/assets/FurEver-Home.png',
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
    {
        slug: 'eventu',
        name: 'Eventu',
        image: '', // TODO: add a screenshot, e.g. /assets/work-eventu.png
        description:
            'A Flask event site with registration, login, an events page, a host-an-event form and an admin dashboard, backed by MySQL.',
        stack: ['Flask', 'MySQL', 'Flask-WTF', 'HTML', 'CSS'],
        live: '',
        code: 'https://github.com/binamnepal/Eventu',
        role: 'Full-stack developer',
        problem:
            'A server-rendered event site: attendees need to browse and register, organisers need a way to host events, and someone needs to manage it all.',
        approach:
            'Flask routes for registration, login, events, hosting, contact and an admin dashboard. Forms use Flask-WTF for validation and CSRF protection, and data is stored in MySQL through flask-mysqldb with parameterised queries.',
        result:
            'A working multi-page app. Known gaps I would fix next: hash passwords instead of storing them as plain text, protect the admin dashboard behind real sessions and roles, and move the secret key and database credentials into environment variables.',
    },
    {
        slug: 'style-pro',
        name: 'Style Pro',
        image: '', // TODO: add a screenshot, e.g. /assets/work-stylepro.png
        description:
            'A multi-page clothing store front end with shop, cart, checkout, features and contact pages.',
        stack: ['HTML', 'CSS', 'JavaScript'],
        live: '',
        code: 'https://github.com/binamnepal/Style-Pro',
        role: 'Frontend developer',
        problem:
            'A small clothing brand needs a storefront where customers can browse products, add them to a cart and reach a checkout page.',
        approach:
            'Plain HTML, CSS and a little JavaScript: separate pages for the shop, cart, checkout, features and contact, with product photos, a shared stylesheet and the cart kept in localStorage.',
        result:
            'An early project that covers the full page flow of an online shop. It is static only, with no backend or real payments.',
    },
];

export function getProjectBySlug(slug) {
    return PROJECTS.find((project) => project.slug === slug);
}
