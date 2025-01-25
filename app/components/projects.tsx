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
    image: "/camp.jpg",
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
    <div className="flex flex-col gap-12">
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col gap-4">
          <h3 className="font-medium text-xl">{project.title}</h3>
          <div className="relative w-[300px] h-[200px]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
          <p className="text-neutral-600 dark:text-neutral-400">
            {project.description}
          </p>
          <div className="flex gap-4">
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
              >
                Code ↗
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
