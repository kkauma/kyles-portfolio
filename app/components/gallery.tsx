"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ImageModal from "./ImageModal";

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <div
            key={image.public_id}
            className="relative aspect-square cursor-pointer"
            onClick={() => setSelectedImage(image.secure_url)}
          >
            <Image
              src={image.secure_url}
              alt="Gallery image"
              fill
              className="object-cover hover:opacity-90 transition-opacity"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
