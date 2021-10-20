import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OpYWhenVisible = ({ children }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("to");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="from"
      transition={{ duration: 1, delay: 0.3, type: "tween", damping: 15 }}
      variants={{
        from: { opacity: 0, y: "4%" },
        to: { opacity: 1, y: "0%" },
      }}
    >
      {children}
    </motion.div>
  );
};

export default OpYWhenVisible;
