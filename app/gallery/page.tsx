import Gallery from "app/components/gallery";

export const metadata = {
  title: "Gallery",
  description: "Places I've been.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Gallery</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <Gallery />
      </div>
    </section>
  );
}
