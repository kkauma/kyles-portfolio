import { NextResponse } from "next/server";

// Try different ways to access the API key
const API_KEY = process.env.GOOGLE_BOOKS_API_KEY;

export async function GET(request: Request) {
  console.log("API Key exists:", !!API_KEY);

  // Return hardcoded books for now
  const mockBooks = [
    {
      title: "The Pragmatic Programmer",
      author: "David Thomas, Andrew Hunt",
      description:
        "A guide to becoming a better programmer through practical advice and timeless principles.",
      coverImage:
        "https://books.google.com/books/content?id=5wBQEp6ruIAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      link: "https://books.google.com/books?id=5wBQEp6ruIAC",
      readAt: "2024-02",
      rating: 5,
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      description:
        "An easy and proven way to build good habits and break bad ones.",
      coverImage:
        "https://books.google.com/books/content?id=XfFvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      link: "https://books.google.com/books?id=XfFvDwAAQBAJ",
      readAt: "2024-01",
      rating: 5,
    },
    {
      title: "The Millionaire Fastlane",
      author: "MJ DeMarco",
      description:
        "Crack the code to wealth and live rich for a lifetime. The Millionaire Fastlane is the echo of a chance encounter I had long ago when I spotted a Lamborghini Countach in a store parking lot.",
      coverImage:
        "https://books.google.com/books/content?id=bNvUCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      link: "https://books.google.com/books?id=bNvUCwAAQBAJ",
      readAt: "2023-11",
      rating: 5,
    },
    {
      title: "Million Dollar Weekend",
      author: "Noah Kagan",
      description:
        "The 2-day plan to start a business, find customers, and make your first sale. A practical guide to launching a successful business in just one weekend from the founder of AppSumo.",
      coverImage:
        "https://books.google.com/books/content?id=aSZSzwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      link: "https://books.google.com/books?id=aSZSzwEACAAJ",
      readAt: "2023-09",
      rating: 4,
    },
    {
      title: "$100M Offers",
      author: "Alex Hormozi",
      description:
        "How to make offers so good people feel stupid saying no. This book teaches you how to create an offer that sells itself, allowing you to charge premium prices while making it easier to sell.",
      coverImage:
        "https://books.google.com/books/content?id=RdOAzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      link: "https://books.google.com/books?id=RdOAzgEACAAJ",
      readAt: "2023-07",
      rating: 5,
    },
  ];

  return NextResponse.json(mockBooks);
}

export const revalidate = 3600; // Cache for 1 hour
