import Image from "next/image";

type Project = {
  title: string;
  description: string;
  image: string;
  code?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Campfinder",
    description: "A website for finding campsites all over the world.",
    image: "/campsite.jpg",
    code: "https://github.com/kkauma/campfinder",
    demo: "https://campfinder-bd1w.onrender.com/",
  },
  {
    title: "Movie Fight",
    description: "A website for comparing movies.",
    image: "/movie.jpg",
    code: "https://github.com/kkauma/movie_comparison",
    demo: "https://moviefight.app",
  },
  {
    title: "Bookshelf",
    description: "A simple app highlighting some of my favorite books.",
    image: "/bookshelf.jpg",
    code: "https://github.com/kkauma/bookshelf",
    demo: "https://modernbookshelf.io",
  },
  // Add more projects here
];

export function Projects() {
  return (
    <div className="grid grid-cols-1 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 pt-2 max-w-[600px]"
        >
          <div className="space-y-4">
            <h3 className="text-xl font-medium">{project.title}</h3>

            <div className="relative h-[200px] rounded-md overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {project.description}
            </p>

            <div className="flex gap-4">
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
                >
                  Code ↗
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
                >
                  Demo ↗
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
