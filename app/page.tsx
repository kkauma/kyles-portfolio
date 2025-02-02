import Image from "next/image";
import { BlogPosts } from "app/components/posts";
import { CopyEmail } from "app/components/copy-email";

export default function Page() {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
        <Image
          alt="Kyle Kauma"
          src="/kyle.jpeg" // Make sure to add your photo to the public directory
          width={200}
          height={200}
          priority
          className="grayscale hover:grayscale-0 transition-all duration-300"
        />
        <div>
          <h1 className="font-semibold text-5xl mb-2 tracking-tighter">
            Kyle Kauma
          </h1>
          <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 mb-4">
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>Scottsdale, AZ</span>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            👋 Hi, I'm Kyle. I'm an aspiring software engineer and entrepreneur,
            constantly learning and building. I most recently spent 3 years at{" "}
            <a
              href="https://vercel.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-800 dark:text-neutral-200 underline hover:no-underline hover:text-neutral-600 dark:hover:text-neutral-400"
            >
              Vercel
            </a>
            , working on the Strategic Finance team.
          </p>
          <CopyEmail />
        </div>
      </div>
    </section>
  );
}
