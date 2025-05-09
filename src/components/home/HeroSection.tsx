import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MouseEvent, useEffect, useRef, useState } from "react";
const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const heroRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: MouseEvent) => {
    if (!heroRef.current) return;
    const { left, top, width, height } =
      heroRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePosition({
      x,
      y,
    });
  };

  const handleScroll = (section) => {
    const scrollSection = document.getElementById(section);
    if (scrollSection) {
      scrollSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-20 left-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2"
          animate={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -30,
            y: mousePosition.y * -30,
          }}
          transition={{
            type: "spring",
            stiffness: 40,
          }}
        />
        <motion.div
          className="absolute top-40 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 40,
            y: mousePosition.y * 40,
          }}
          transition={{
            type: "spring",
            stiffness: 30,
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          >
            <h1 className=" md:text-5xl  mb-6 leading-tight px-0 lg:text-6xl font-bold text-left">
              Mulai 20K
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight px-0 lg:text-4xl text-left">
              Jasa Joki Tugas & Pengembangan Web/Mobile
              <span className="text-gradient block mt-2">Terpercaya</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              Dapatkan bantuan untuk tugas akademik, pengembangan website, dan
              aplikasi mobile dengan harga bersaing dan kualitas terbaik.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg"
                className="text-lg group relative overflow-hidden"
              >
                <span
                  className="relative z-10"
                  onClick={() => handleScroll("pricing")}
                >
                  Pesan Sekarang
                </span>
                <span className="absolute inset-0 bg-primary/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg group relative overflow-hidden"
              >
                <span
                  className="relative z-10"
                  onClick={() => handleScroll("contact")}
                >
                  Konsultasi Gratis
                </span>
                <span className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="md:w-1/2 relative"
          >
            <div className="relative glow-effect animate-float rounded-lg">
              <motion.div
                className="glow-container rounded-lg"
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1573495627361-d9b87960b12d?q=80&w=2069&auto=format&fit=crop"
                  alt="Jasa Joki Tugas dan Pengembangan"
                  className="rounded-lg shadow-xl object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
