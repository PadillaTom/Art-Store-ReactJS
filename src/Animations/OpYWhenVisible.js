import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OpYWhenVisible = ({
  children,
  setDelay,
  setDuration,
  setYAxis,
  setType,
  setDamping,
}) => {
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
        duration: !setDuration ? 0.75 : setDuration,
        delay: !setDelay ? 0.3 : setDelay,
        type: !setType ? "tween" : setType,
        damping: !setDamping ? 15 : setDamping,
      }}
      variants={{
        from: { opacity: 0, y: `${!setYAxis ? "8%" : setYAxis}` },
        to: { opacity: 1, y: "0%" },
      }}
    >
      {children}
    </motion.div>
  );
};

export default OpYWhenVisible;
