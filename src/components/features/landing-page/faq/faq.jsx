import { motion } from "motion/react";

import { faqData } from "../data";
import FaqItems from "./faqItems";

function FAQs() {
  return (
    <section id="faqs" className="pt-24 pb-[72px] bg-white">
      <div className="max-w-[714px] m-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="mb-12 text-[1.65ch] xs:text-[2.3ch] sm:text-[3ch] text-background text-center font-stylish leading-[1.1]">
            Thing you <br />
            <span className="text-accent">might be wondering ...</span>
          </h3>
        </motion.div>

        {/* FAQ Accordion */}
        <div>
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4 + index * 0.1,
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              <FaqItems
                index={index}
                question={item.question}
                answer={item.answer}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQs;
