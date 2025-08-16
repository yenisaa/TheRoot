import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";

import HeaderContent from "./headerContent";

function Header() {
  const [showFloating, setShowFloating] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFloating(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="h-20 flex items-center justify-center border-b border-[#FFFFFF0A]"
      >
        <div className="w-full container flex items-center justify-between">
          <HeaderContent />
        </div>
      </header>

      <AnimatePresence>
        {showFloating && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-[1280px] h-20 fixed top-2 left-1/2 -translate-x-1/2 z-50 
                       bg-background border border-[#FFFFFF0A] rounded-2xl 
                       shadow-lg px-6 py-3 w-[95%] md:[80%] flex items-center"
          >
            <div className="w-full flex items-center justify-between gap-6">
              <HeaderContent />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
