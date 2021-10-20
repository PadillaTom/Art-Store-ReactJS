import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OpacityOneWhenVisible = ({ children, setDuration, setDelay }) => {
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
      transition={{
        duration: !setDuration ? 0.5 : setDuration,
        delay: !setDelay ? 0.12 : setDelay,
        type: "tween",
        damping: 25,
      }}
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
