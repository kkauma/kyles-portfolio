import { Projects } from "app/components/projects";

export const metadata = {
  title: "Projects",
  description: "Things I've built.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <Projects />
      </div>
    </section>
  );
}
