import { motion } from "framer-motion";

interface LocationIconProps {
  name: string;
  icon: string;
  onClick: () => void;
  size?: "normal" | "large";
}

export default function LocationIcon({
  name,
  icon,
  onClick,
  size = "normal",
}: LocationIconProps) {
  const sizeClasses =
    size === "large" ? "text-9xl mb-4 p-8" : "text-5xl mb-2 p-3";

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`flex flex-col items-center cursor-pointer bg-white rounded-full shadow-lg ${sizeClasses}`}
    >
      <div className={sizeClasses}>{icon}</div>
      <p
        className={`text-pink-600 font-semibold ${
          size === "large" ? "text-2xl" : "text-sm"
        }`}
      >
        {name}
      </p>
    </motion.div>
  );
}
