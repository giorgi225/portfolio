import { motion, MotionValue } from "framer-motion";

export default function Video({ y }: { y: MotionValue<number> }) {
  return (
    <motion.video
      src="/moon.mp4"
      className="w-full h-[55%] md:h-full md:object-contain object-cover"
      autoPlay
      preload="none"
      animate={{ opacity: 1, scale: 1 }}
      style={{ scale: 2, y }}
      muted
      loop
      playsInline
      initial={{ opacity: 0, scale: 0, y: 0 }} // Ensure initial y is 0
      transition={{
        duration: 1.5,
        ease: [0.6, 0.05, 0.01, 0.99],
        type: "spring",
      }}
    />
  );
}
