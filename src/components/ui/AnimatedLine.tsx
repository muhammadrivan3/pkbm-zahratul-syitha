import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedLineProps {
  width?: string;
  height?: string;
  color?: string;
  className?: string;
}

const AnimatedLine: React.FC<AnimatedLineProps> = ({
  width = "w-16",        // default Tailwind width
  height = "h-[2px]",    // default Tailwind height
  color = "bg-blue-500", // default color
  className = "",        // for extra customization
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scaleX: 0 }}
      animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`${width} ${height} ${color} rounded-full mx-auto origin-left ${className}`}
    />
  );
};

export default AnimatedLine;
