import { Books } from "app/components/books";

export const metadata = {
  title: "Books",
  description: "Books I've read and recommend.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Reading List
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <Books />
      </div>
    </section>
  );
}
