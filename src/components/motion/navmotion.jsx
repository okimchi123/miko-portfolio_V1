"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function NavMotion() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 1, y: -100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="visible"
      animate="hidden"
      transition={{ duration: 2, delay: 0.7 }}
      className="h-full w-full absolute top-0 bg-background"
    ></motion.div>
  );
}
