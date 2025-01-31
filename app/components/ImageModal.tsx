import { FC } from "react";
import Image from "next/image";

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
}

const ImageModal: FC<ImageModalProps> = ({ imageUrl, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative w-[90vw] h-[90vh]">
        <Image
          src={imageUrl}
          alt="Full screen view"
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl bg-black bg-opacity-50 w-10 h-10 rounded-full"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
