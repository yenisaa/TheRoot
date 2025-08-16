import { motion } from "motion/react";

import { faceCards } from "../data";

function CultureFaceCards() {
  return (
    <div className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
      <div className="flex justify-center">
        {/* Mobile: 4-4-4-3 */}
        <div className="block md:hidden">
          <div className="space-y-3">
            {/* Row 1: 4 images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex justify-center gap-[7.5px]"
            >
              {faceCards.slice(0, 4).map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: index * 0.08,
                  }}
                  className="relative size-[75px] rounded-full overflow-hidden shadow-lg"
                >
                  <img
                    src={src}
                    alt={`Profile ${index + 1}`}
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Row 2: 4 images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="flex justify-center gap-[7.5px]"
            >
              {faceCards.slice(4, 8).map((src, index) => (
                <motion.div
                  key={index + 4}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: 0.2 + index * 0.08,
                  }}
                  className="relative size-[75px] rounded-full overflow-hidden shadow-lg"
                >
                  <img
                    src={src}
                    alt={`Profile ${index + 5}`}
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Row 3: 4 images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="flex justify-center gap-[7.5px]"
            >
              {faceCards.slice(8, 12).map((src, index) => (
                <motion.div
                  key={index + 8}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: 0.3 + index * 0.08,
                  }}
                  className="relative size-[75px] rounded-full overflow-hidden shadow-lg"
                >
                  <img
                    src={src}
                    alt={`Profile ${index + 9}`}
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Row 4: 3 images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="flex justify-center gap-[7.5px]"
            >
              {faceCards.slice(12, 15).map((src, index) => (
                <motion.div
                  key={index + 12}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: 0.4 + index * 0.08,
                  }}
                  className="relative size-[75px] rounded-full overflow-hidden shadow-lg"
                >
                  <img
                    src={src}
                    alt={`Profile ${index + 13}`}
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Desktop: 3-5-7 */}
        <div className="hidden md:block">
          <div className="space-y-4">
            {/* Row 1: 3 images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex justify-center gap-[6px]"
            >
              {faceCards.slice(0, 3).map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: index * 0.08,
                  }}
                  className="relative size-[75px] rounded-full overflow-hidden shadow-lg"
                >
                  <img
                    src={src}
                    alt={`Profile ${index + 1}`}
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Row 2: 5 images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex justify-center gap-[6px]"
            >
              {faceCards.slice(3, 8).map((src, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: 0.2 + index * 0.08,
                  }}
                  className="relative size-[75px] rounded-full overflow-hidden shadow-lg"
                >
                  <img
                    src={src}
                    alt={`Profile ${index + 4}`}
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Row 3: 7 images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex justify-center gap-[6px]"
            >
              {faceCards.slice(8, 15).map((src, index) => (
                <motion.div
                  key={index + 8}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: 0.3 + index * 0.08,
                  }}
                  className="relative size-[75px] rounded-full overflow-hidden shadow-lg"
                >
                  <img
                    src={src}
                    alt={`Profile ${index + 9}`}
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CultureFaceCards;
