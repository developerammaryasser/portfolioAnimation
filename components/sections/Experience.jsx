"use client";
import { motion } from "framer-motion";
import { experience } from "@/constants";
import Typography from "../elements/Typography";
import Section from "../layouts/Section";
import ContentTags from "../elements/ContentTags";
import { duration, fadeInUp } from "@/utils/variants";

const Experience = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="w-full flex flex-col items-stretch justify-start gap-y-8">
        {experience.map(
          ({ year, role, company, description, technologies }, key) => (
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
                className="lg:w-1/2 text-center"
              >
                <Typography variant="lead">{year}</Typography>
              </motion.div>
              <ContentTags
                role={role}
                company={company}
                description={description}
                technologies={technologies}
              />
            </div>
          )
        )}
      </div>
    </Section>
  );
};
export default Experience;
