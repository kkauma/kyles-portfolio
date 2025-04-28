"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Book = {
  title: string;
  author: string;
  description: string;
  coverImage: string;
  link?: string;
  readAt: string;
  rating: number; // 1-5
};

export function Books() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/books");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch books");
        }

        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <div>Loading books...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!books.length) {
    return <div>No books found.</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-8">
      {books
        .sort(
          (a, b) => new Date(b.readAt).getTime() - new Date(a.readAt).getTime()
        )
        .map((book, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-6 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4"
          >
            <div className="relative w-[120px] h-[180px] flex-shrink-0">
              <Image
                src={book.coverImage || "/placeholder-book.jpg"}
                alt={book.title}
                fill
                className="object-cover rounded-md"
                priority={index === 0}
              />
            </div>

            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-medium mb-2">{book.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                  by {book.author}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  {book.description}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">
                      {i < book.rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>

                {book.link && (
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
                  >
                    View on Google Books ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
