import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  height?: string; // optional height tailwind class
  className?: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  height = "h-64",
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });

  return (
    <div ref={ref} className={`overflow-hidden relative ${height}`}>
      <motion.img
        src={src}
        alt={alt}
        className={`w-full object-cover shadow-md ${className}`}
        style={{ y: smoothY }}
      />
    </div>
  );
};

export default ParallaxImage;
