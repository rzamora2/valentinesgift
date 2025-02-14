"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Photo {
  src: string;
  caption: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  onClose: () => void;
}

export default function PhotoGallery({ photos, onClose }: PhotoGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4"
    >
      <div className="relative w-full max-w-6xl aspect-video bg-white rounded-lg shadow-lg overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={photos[currentIndex].src}
              alt={`Photo ${currentIndex + 1}`}
              layout="fill"
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center p-2">
          {photos[currentIndex].caption}
        </div>
        <button
          onClick={prevPhoto}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
        >
          ❮
        </button>
        <button
          onClick={nextPhoto}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
        >
          ❯
        </button>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
        >
          <X size={24} />
        </button>
      </div>
    </motion.div>
  );
}
