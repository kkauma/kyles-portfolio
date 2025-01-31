// File: app/gallery.tsx
import Image from "next/image";
import fs from "fs";
import path from "path";

export default function Gallery() {
  const placesDir = path.join(process.cwd(), "public/images/places");
  const placesImages = fs.readdirSync(placesDir);

  return (
    <div>
      <div className="gallery">
        {placesImages.map((image) => (
          <Image
            key={image}
            src={`/images/places/${image}`}
            alt={image}
            width={300}
            height={200}
          />
        ))}
      </div>
    </div>
  );
}
