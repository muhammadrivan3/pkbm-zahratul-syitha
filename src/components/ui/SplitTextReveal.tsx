import React, { useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  text: string;
  containerClassName?: string;
  textClassName?: string;
  stagger?: number;
}

const SplitTextReveal: React.FC<Props> = ({
  text,
  containerClassName = "",
  textClassName = "",
  stagger = 0.03,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const characters = useMemo(
    () =>
      text.split("").map((char, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            delay: idx * stagger,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1], // easeOutBack
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      )),
    [text, isInView, stagger]
  );

  return (
    <h2 ref={ref} className={`overflow-hidden ${containerClassName}`}>
      <span className={`inline-block leading-[1.5] ${textClassName}`}>
        {characters}
      </span>
    </h2>
  );
};

export default SplitTextReveal;
