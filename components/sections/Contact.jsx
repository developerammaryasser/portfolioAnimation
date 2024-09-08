"use client";
import { motion } from "framer-motion";
import { contact } from "@/constants";
import Typography from "../elements/Typography";
import Link from "next/link";
import { duration, fadeInUp } from "@/utils/variants";
const Contact = () => {
  return (
    <div className="w-full py-14 md:py-20 lg:py-24">
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={fadeInUp}
        viewport={{ once: true }}
        transition={duration}
        className="container text-center flex flex-col items-stretch justify-center gap-y-8"
      >
        <Typography variant="h2">Get in Touch</Typography>
        <Typography variant="lead">{contact.address}</Typography>
        <Typography variant="lead">{contact.phoneNo}</Typography>
        <Typography variant="lead">
          <Link href="mailto:{contact.email}" className="underline">
            {contact.email}
          </Link>
        </Typography>
      </motion.div>
    </div>
  );
};
export default Contact;
