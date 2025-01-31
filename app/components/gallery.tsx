"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
}

// Helper function to get optimized URL
function getOptimizedUrl(url: string, width: number): string {
  return url.replace("/upload/", `/upload/w_${width},c_scale,f_auto,q_auto/`);
}

export default function Gallery() {
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/images");
        if (!response.ok) {
          setError("Failed to fetch images");
          return;
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image) => (
        <div key={image.public_id} className="relative aspect-square">
          <Image
            src={image.secure_url}
            alt={image.public_id}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL={`${image.secure_url.replace(
              "/upload/",
              "/upload/w_10,e_blur:100/"
            )}`}
          />
        </div>
      ))}
    </div>
  );
}
