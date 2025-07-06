import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

type AnimatedLinkProps = {
  to?: string;
  label?: string;
  className?: string;
  textVariants?: Record<string, any>;
  arrowVariants?: Record<string, any>;
  lineVariants?: Record<string, any>;
};

const defaultTextVariants = {
  initial: { scale: 1, color: "#374151" },
  hover: { scale: 1.05, color: "#1e40af" },
};

const defaultArrowVariants = {
  initial: {
    x: 0,
    borderRadius: "0.375rem",
    backgroundColor: "transparent",
    border: "2px solid #e5e7eb",
  },
  hover: {
    x: 5,
    borderRadius: "999px",
    backgroundColor: "#eff6ff",
    border: "2px solid #1e40af",
  },
};

const defaultLineVariants = {
  initial: { scaleX: 1 },
  hover: { scaleX: 1 },
};

const AnimatedLink = ({
  to = "#",
  label = "Selengkapnya",
  className = "",
  textVariants = defaultTextVariants,
  arrowVariants = defaultArrowVariants,
  lineVariants = defaultLineVariants,
}: AnimatedLinkProps) => {
  return (
    <motion.a
      href={to}
      variants={{}}
      initial="initial"
      whileHover="hover"
      className={clsx("inline-flex items-center gap-3 cursor-pointer group", className)}
    >
      {/* Garis */}
      <motion.div
        variants={lineVariants}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="h-[2px] w-32 bg-gray-300 origin-left"
      />

      {/* Label + Arrow */}
      <motion.span
        variants={textVariants}
        transition={{ duration: 0.3 }}
        className="flex items-center text-sm font-medium"
      >
        {label}
        <motion.span
          variants={arrowVariants}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="ml-2 flex items-center justify-center p-[6px]"
        >
          <ArrowRight className="w-4 h-4" />
        </motion.span>
      </motion.span>
    </motion.a>
  );
};

export default AnimatedLink;
