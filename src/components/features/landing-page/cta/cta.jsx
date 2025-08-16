import { motion } from "motion/react";

import root from "@/assets/images/a-root.png";
import EmailForm from "../emailForm";

function CTA() {
  return (
    <section
      id="users"
      className="py-14 sm:pt-0 sm:pb-24 bg-background sm:bg-white"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ amount: 0.2 }}
          className="sm:pt-10 sm:pb-16 bg-background sm:border-[6px] sm:border-[#FFFFFF1F] rounded-[40px]"
        >
          <div className="flex items-center justify-center">
            <img
              src={root}
              alt="root"
              className="max-h-16 w-auto object-contain"
            />
          </div>

          <h3 className="max-w-[250px] xs:max-w-[500px] pt-6 m-auto text-[2.4ch] xs:text-[3ch] text-center text-secondary-foreground font-stylish leading-[1.1]">
            Get first access, early rewards, and inside updates.
          </h3>

          <p className="mt-2 mb-6 text-base sm:text-xl text-center font-eudoxus400">
            Join our waitlist to stay up to date.
          </p>

          <div className="max-w-[424px] m-auto">
            <EmailForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
