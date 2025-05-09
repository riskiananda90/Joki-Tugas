
import { motion } from "framer-motion";

const technologies = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Vue", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" }
];

const TechStackSection = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Teknologi yang Kami Kuasai</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tim ahli kami berpengalaman dalam berbagai teknologi modern untuk memberikan hasil terbaik
          </p>
        </motion.div>

        <div className="relative">
          {/* First row - moves to the right */}
          <div className="flex space-x-12 py-6 animate-marquee">
            {technologies.slice(0, 6).map((tech, index) => (
              <motion.div 
                key={`tech-1-${index}`}
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 p-4 bg-card rounded-lg shadow-md hover:shadow-lg border border-border hover:border-primary/50 transition-all duration-300 flex items-center justify-center">
                  <img src={tech.logo} alt={tech.name} className="w-12 h-12 object-contain" />
                </div>
                <span className="mt-2 text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Second row - moves to the left */}
          <div className="flex space-x-12 py-6 animate-marquee-reverse">
            {technologies.slice(6).map((tech, index) => (
              <motion.div 
                key={`tech-2-${index}`}
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 p-4 bg-card rounded-lg shadow-md hover:shadow-lg border border-border hover:border-primary/50 transition-all duration-300 flex items-center justify-center">
                  <img src={tech.logo} alt={tech.name} className="w-12 h-12 object-contain" />
                </div>
                <span className="mt-2 text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
          
          {/* Fading edges */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
