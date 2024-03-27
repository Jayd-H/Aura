import React from "react";
import { HourglassEmptyOutlined } from "@mui/icons-material";
import { motion } from "framer-motion";

const LoadingScreen: React.FC = () => {
  const dotVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen font-montserrat">
      <motion.div
        animate={{ rotate: [0, 180, 180, 360] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: 0.5, originY: 0.5 }}
        className="w-10 h-10"
      >
        <HourglassEmptyOutlined style={{ fontSize: 40 }} />
      </motion.div>
      <div className="mt-4 text-lg items-center flex">
        <p>Scanning for Devices</p>
        <motion.span
          variants={dotVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          .
        </motion.span>
        <motion.span
          variants={dotVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1, duration: 0.5 }}
        >
          .
        </motion.span>
        <motion.span
          variants={dotVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          .
        </motion.span>
      </div>
    </div>
  );
};

export default LoadingScreen;
