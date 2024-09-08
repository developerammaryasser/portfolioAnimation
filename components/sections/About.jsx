"use client";
import { motion } from "framer-motion";
import { about, technologies } from "@/constants";
import Section from "../layouts/Section";
import Content from "../elements/Content";
import Image from "next/image";
const About = () => {
  return (
    <>
      <Section
        id="about"
        title={
          <>
            About <span className="text-neutral-500">Me</span>
          </>
        }
      >
        <div className="flex flex-col items-start justify-center lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-16">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8}}
            viewport={{ once: true }}
          >
            <Image
              src="/about.jpg"
              alt="About"
              width={500}
              height={500}
              className="rounded-2xl object-cover"
            />
          </motion.div>
          <Content description={about} descClassName="!w-full" className="w-full lg:w-1/2"/>
        </div>
      </Section>
      <Section title="Technologies">
        <ul className="w-full flex flex-wrap items-center justify-center gap-16">
          {technologies.map(({ id, icon }) => (
            <motion.li
            animate={{y: [0,15,0]}}
            whileHover={{y: 0}}
            transition={{duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: id / 5}}
            key={id} className="p-4 rounded-2xl border-neutral-800 border">
              {icon}
            </motion.li>
          ))}
        </ul>
      </Section>
    </>
  );
};
export default About;
