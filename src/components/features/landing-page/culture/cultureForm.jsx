import { motion } from "motion/react";
import EmailForm from "../emailForm";

function CultureForm() {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        className="max-w-[800px] mt-14 mb-10 text-secondary-foreground text-[2.75ch] xs:text-[3.7ch] sm:text-[5ch] text-center font-stylish leading-[1.1]"
      >
        <span className="text-white">Culture</span>, gently woven into your
        daily life.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
        className="max-w-[524px] w-full m-auto"
      >
        <EmailForm />
      </motion.div>
    </>
  );
}

export default CultureForm;
