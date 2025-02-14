"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function FinalSurprise() {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg max-w-lg w-full text-center shadow-lg"
      >
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="Final surprise"
          width={400}
          height={300}
          className="rounded-lg shadow-lg mx-auto"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 text-2xl text-pink-600 font-semibold"
        >
          I love you to the moon and back! ❤️
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-4 flex justify-center"
        >
          <Heart className="text-red-500" size={32} />
          <Heart className="text-red-500 animate-pulse" size={40} />
          <Heart className="text-red-500" size={32} />
        </motion.div>
      </motion.div>
    </div>
  );
}
