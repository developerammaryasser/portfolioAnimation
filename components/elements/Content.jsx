"use client";
import { motion } from "framer-motion";
import Typography from "./Typography";
import { fadeInUp, duration } from "@/utils/variants";
const Content = ({
  title,
  titleType = "h2",
  subTitle,
  description,
  className = "",
  descClassName = "",
  titleClassName = "",
  subTitleClassName = "",
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-center gap-y-8 ${className}`}
    >
      {title && (
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
          viewport={{ once: true }}
          transition={duration}
        >
          <Typography variant={titleType} className={titleClassName}>
            {title}
          </Typography>
        </motion.div>
      )}
      {subTitle && (
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography variant="h3" className={subTitleClassName}>
            {subTitle}
          </Typography>
        </motion.div>
      )}
      {description && (
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typography
            variant="lead"
            className={`w-full md:w-[80%] lg:w-[75%] ${descClassName}`}
          >
            {description}
          </Typography>
        </motion.div>
      )}
    </div>
  );
};
export default Content;
