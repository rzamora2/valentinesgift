import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";

interface FinalSurpriseProps {
  onReset: () => void;
}

export default function FinalSurprise({ onReset }: FinalSurpriseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-lg max-w-lg w-full text-center shadow-lg"
    >
      <Image
        src="/final.jpg"
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
        Nuestro Amor No Tiene Limite, Te Amo! ❤️
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
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        onClick={onReset}
        className="mt-6 px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
      >
        Start Over
      </motion.button>
    </motion.div>
  );
}
