import { NextResponse } from "next/server";
import cloudinary from "../../lib/cloudinary";

export async function GET() {
  try {
    const result = await cloudinary.api.resources({
      type: "upload",
      prefix: "kyles-website/", // This specifies the folder
      max_results: 100, // Adjust this number based on how many images you want to fetch
    });

    return NextResponse.json(result.resources);
  } catch (error) {
    console.error("Error fetching images:", error);
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}

export const revalidate = 3600; // Cache for 1 hour
