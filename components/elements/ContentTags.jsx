"use client";
import { motion } from "framer-motion";
import Typography from "./Typography";
import { duration, fadeInUpWithChildren } from "@/utils/variants";

const ContentTags = ({
  role = "",
  company,
  description,
  technologies = ["all"],
}) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      transition={duration}
      viewport={{ once: true }}
      variants={fadeInUpWithChildren}
      className="flex flex-col items-start justify-start gap-4 lg:w-1/2"
    >
      <Typography variant="h3">
        {role}
        {company && ` - ` + company}
      </Typography>
      <Typography variant="p">{description}</Typography>
      <div className="w-full flex flex-wrap gap-4 lg:gap-8">
        {technologies.map((tech, key) => (
          <span
            key={key}
            className="p-2 rounded-md bg-violet-500/10 text-violet-500"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
export default ContentTags;
