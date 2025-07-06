// import React, { useRef, useMemo } from "react";
// import { motion, useInView } from "framer-motion";

// interface ScrollRevealProps {
//   children: string;
//   containerClassName?: string;
//   textClassName?: string;
//   baseOpacity?: number;
//   yOffset?: number;
//   blurStrength?: number;
//   stagger?: number;
// }

// const ScrollReveal: React.FC<ScrollRevealProps> = ({
//   children,
//   containerClassName = "",
//   textClassName = "",
//   baseOpacity = 0.2,
//   yOffset = 20,
//   blurStrength = 4,
//   stagger = 0.10,
// }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

//   const paragraphs = useMemo(() => {
//     // Split by dot and space to simulate natural chunks
//     return children.split(/(?<=\.)\s+/g);
//   }, [children]);

//   return (
//     <div ref={ref} className={`space-y-4 ${containerClassName}`}>
//       {paragraphs.map((line, index) => (
//         <motion.p
//           key={index}
//           initial={{ opacity: baseOpacity, y: yOffset, filter: `blur(${blurStrength}px)` }}
//           animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
//           transition={{
//             duration: 0.6,
//             ease: "easeOut",
//             delay: index * stagger,
//           }}
//           className={` text-gray-600 ${textClassName}`}
//         >
//           {line}
//         </motion.p>
//       ))}
//     </div>
//   );
// };

// export default ScrollReveal;
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  containerClassName?: string;
  textClassName?: string;
  baseOpacity?: number;
  yOffset?: number;
  blurStrength?: number;
  stagger?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  containerClassName = "",
  textClassName = "",
  baseOpacity = 0.2,
  yOffset = 20,
  blurStrength = 4,
  stagger = 0.10,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  // Jika children berupa string, pecah menjadi kalimat per kalimat
  const lines = typeof children === "string"
    ? children.split(/(?<=\.)\s+/g)
    : [children]; // jika bukan string (misal: JSX), jadikan satu bagian

  return (
    <div ref={ref} className={`space-y-4 ${containerClassName}`}>
      {lines.map((line, index) => (
        <motion.p
          key={index}
          initial={{
            opacity: baseOpacity,
            y: yOffset,
            filter: `blur(${blurStrength}px)`,
          }}
          animate={
            isInView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : {}
          }
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: index * stagger,
          }}
          className={`text-gray-600 ${textClassName}`}
        >
          {line}
        </motion.p>
      ))}
    </div>
  );
};

export default ScrollReveal;
