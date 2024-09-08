"use client";
import { motion } from "framer-motion";
import { projects } from "@/constants";
import ContentTags from "../elements/ContentTags";
import Typography from "../elements/Typography";
import Section from "../layouts/Section";
import Image from "next/image";
import { duration, fadeInUp } from "@/utils/variants";
const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="w-full flex flex-col items-stretch justify-start gap-y-8">
        {projects.map(({ title, description, image, technologies }, key) => (
          <div
            key={key}
            className="flex flex-col lg:flex-row items-start justify-between gap-8"
          >
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={fadeInUp}
              transition={duration}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 flex items-center lg:justify-center lg:me-16"
            >
              <Image
                src={image}
                alt={title}
                width={150}
                height={150}
                className="rounded-md object-cover"
              />
            </motion.div>
            <ContentTags
              role={title}
              description={description}
              technologies={technologies}
            />
          </div>
        ))}
      </div>
    </Section>
  );
};
export default Projects;
