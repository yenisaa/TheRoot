import { motion } from "motion/react";

import FeatureCards from "./featureCards";
import { cards } from "../data";

function Features() {
  return (
    <section className="py-20 bg-primary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="max-w-[700px] text-[1.65ch] xs:text-[2.3ch] sm:text-[3ch] m-auto text-background text-center font-stylish leading-[1.1]">
            We are <span className="text-secondary">building</span> for the
            tribe
            <br /> that <span className="text-secondary">speaks</span>,
            <span className="text-secondary">feels</span>, and
            <span className="text-secondary"> remembers</span>.
          </h3>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + i * 0.1,
                duration: 0.4,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
              }}
            >
              <FeatureCards
                id={card.id}
                src={card.src}
                title={card.title}
                content={card.content}
                justify={i === 0 ? "end" : "center"}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
