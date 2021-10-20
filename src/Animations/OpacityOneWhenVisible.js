import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OpacityOneWhenVisible = ({ children }) => {
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
      transition={{ duration: 0.95, delay: 0.12, type: "tween", damping: 25 }}
      variants={{
        from: { opacity: 0 },
        to: { opacity: 1 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default OpacityOneWhenVisible;
