/*
 * Shows the project's screenshot, or a simple gradient tile with the project
 * name when `image` is empty. Add a screenshot to /public/assets and set
 * `image` in src/data/projects.js to replace the tile.
 */
export default function ProjectCover({ project, alt, className = '', lazy = false }) {
    if (project.image) {
        return (
            <img
                src={project.image}
                alt={alt}
                loading={lazy ? 'lazy' : undefined}
                className={className}
            />
        );
    }

    return (
        <div
            role="img"
            aria-label={alt}
            className={`${className} flex items-center justify-center p-6 text-center bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-900`}
        >
            <span className="text-2xl sm:text-3xl font-Ovo font-bold text-white drop-shadow">
                {project.name}
            </span>
        </div>
    );
}
