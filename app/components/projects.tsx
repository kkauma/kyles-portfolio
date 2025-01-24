type Project = {
  title: string;
  description: string;
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Blog",
    description: "A minimalist portfolio and blog built with Next.js and MDX.",
    github: "https://github.com/yourusername/portfolio-blog",
    demo: "https://your-portfolio.com",
  },
  // Add more projects here
];

export function Projects() {
  return (
    <div className="flex flex-col gap-8">
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col gap-2">
          <h3 className="font-medium">{project.title}</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            {project.description}
          </p>
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
              >
                GitHub ↗
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
              >
                Demo ↗
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
