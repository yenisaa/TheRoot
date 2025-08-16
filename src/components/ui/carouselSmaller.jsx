import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

import image1 from "../../assets/images/a-root.png";
import image2 from "../../assets/images/people-image.png";

const slides = [
  {
    img: image1,
    title: (
      <>
        Kaabo <br />
        <span className="text-background">Welcome</span> Ndewo
      </>
    ),
  },
  {
    img: image2,
    title: (
      <>
        The best way to <br />
        learn <span className="text-background">African Languages</span>
      </>
    ),
  },
];

export default function Carousel2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right
  const [touchStartX, setTouchStartX] = useState(null);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      slideTo(currentIndex + 1, 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const slideTo = (newIndex, dir) => {
    setDirection(dir);
    setCurrentIndex((newIndex + slides.length) % slides.length);
  };

  // Swipe handling
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;

    if (diff > 50) {
      // swipe left
      slideTo(currentIndex + 1, 1);
    } else if (diff < -50) {
      // swipe right
      slideTo(currentIndex - 1, -1);
    }

    setTouchStartX(null);
  };

  // Animation variants
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
      transition: { duration: 0.5 },
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      position: "absolute",
      transition: { duration: 0.5 },
    }),
  };

  return (
    <div
      className="w-full max-w-sm mx-auto overflow-hidden relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Animated Slide */}
      <div className="w-full h-auto flex justify-center items-center relative">
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full flex flex-col items-center"
          >
            <img
              src={slides[currentIndex].img}
              alt="slide"
              className="w-full h-[72px] object-contain"
            />
            <h3 className="pt-4 text-accent text-2xl xs:text-3xl font-eudoxus400 text-center font-stylish leading-[1.1]">
              {slides[currentIndex].title}
            </h3>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className="flex flex-row items-center justify-center gap-1 mt-4">
        {slides.map((_, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: "var(--secondary)",
              opacity: currentIndex === idx ? 1 : 0.2,
            }}
            className="w-8 h-1 md:w-6 md:h-[3px] rounded-[5px] transition-all duration-300"
          />
        ))}
      </div>
    </div>
  );
}
