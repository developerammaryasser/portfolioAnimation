"use client";
import { hero } from "@/constants";
import Content from "../elements/Content";
import Section from "../layouts/Section";
import Image from "next/image";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <Section id="" className="h-fit lg:h-[calc(100vh-5rem)]">
      <div className="flex flex-col items-start lg:items-center justify-start lg:flex-row lg:justify-between gap-y-8">
        <Content
          titleType="h1"
          title={`Kevin Rush`}
          subTitle="Full Stack Developer"
          className="w-full lg:w-[60%]"
          description={hero}
        />
        <motion.div
          className="w-full lg:w-[40%]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6}}
          viewport={{ once: true }}
        >
          <Image
            src="/kevinRushProfile.png"
            alt={"kevin rush"}
            width={500}
            height={500}
            className="object-cover"
          />
        </motion.div>
      </div>
    </Section>
  );
};
export default Hero;
