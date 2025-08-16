import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import root from "@/assets/images/a-root.png";

function Hero() {
  return (
    <section className="py-20">
      <div className="max-w-[800px] px-5 md:px-14 lg:px-[100px] m-auto">
        <motion.div
          initial={{ y: 0 }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex items-center justify-center"
        >
          <img
            src={root}
            alt="root"
            className="max-h-[160px] sm:max-h-[200px] w-auto object-contain"
          />
        </motion.div>

        <h1 className="pt-4 text-[3ch] xs:text-[4ch] sm:text-[5ch] text-center font-stylish leading-[1.1]">
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 40, damping: 10 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1.5,
            }}
            viewport={{ once: true }}
            className="inline-block"
          >
            Learn an <span className="text-secondary-foreground">African</span>
          </motion.span>
          <br />
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 40, damping: 10 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1.5,
            }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="text-secondary-foreground">Language</span> for
            free.
          </motion.span>
        </h1>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 40, damping: 10 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1.5,
          }}
          viewport={{ once: true }}
        >
          <p className="my-10 text-base sm:text-2xl text-center">
            Get early access to TheRoots, the language learning app that is fun,
            free, and African.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="w-[200px] m-auto"
        >
          <Button className="w-full py-6 text-base text-primary-foreground">
            Join waitlist
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
