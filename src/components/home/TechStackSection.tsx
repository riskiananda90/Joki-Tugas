import { motion } from "framer-motion";

const technologies = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Angular",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "Vue",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "PHP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Laravel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Flutter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Express",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    name: "Flask",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
  },
  {
    name: "Dart",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
  },
  {
    name: "Tensorflow",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "C++",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "Selenium",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
];

const TechStackSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Teknologi yang Kami Kuasai
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tim ahli kami berpengalaman dalam berbagai teknologi modern untuk
            memberikan hasil terbaik
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* First row - moves to the right */}
          <div className="flex py-6 animate-slide-right whitespace-nowrap">
            {/* First set of technologies */}
            {technologies.slice(0, 10).map((tech, index) => (
              <div
                key={`tech-1-${index}`}
                className="flex flex-col items-center mx-6"
              >
                <div className="w-20 h-20 p-4 bg-card rounded-lg shadow-md hover:shadow-lg border border-border hover:border-primary/50 transition-all duration-300 flex items-center justify-center">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="mt-2 text-sm font-medium">{tech.name}</span>
              </div>
            ))}
            {technologies.slice(0, 10).map((tech, index) => (
              <div
                key={`tech-1-dup-${index}`}
                className="flex flex-col items-center mx-6"
              >
                <div className="w-20 h-20 p-4 bg-card rounded-lg shadow-md hover:shadow-lg border border-border hover:border-primary/50 transition-all duration-300 flex items-center justify-center">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="mt-2 text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>

          <div className="flex py-6 animate-slide-left whitespace-nowrap">
            {technologies.slice(10).map((tech, index) => (
              <div
                key={`tech-2-${index}`}
                className="flex flex-col items-center mx-6"
              >
                <div className="w-20 h-20 p-4 bg-card rounded-lg shadow-md hover:shadow-lg border border-border hover:border-primary/50 transition-all duration-300 flex items-center justify-center">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="mt-2 text-sm font-medium">{tech.name}</span>
              </div>
            ))}
            {technologies.slice(10).map((tech, index) => (
              <div
                key={`tech-2-dup-${index}`}
                className="flex flex-col items-center mx-6"
              >
                <div className="w-20 h-20 p-4 bg-card rounded-lg shadow-md hover:shadow-lg border border-border hover:border-primary/50 transition-all duration-300 flex items-center justify-center">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="mt-2 text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>

          <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
        </div>
      </div>
      <style>{`
        @keyframes slide-right {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes slide-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(50%);
          }
        }

        .animate-slide-right {
          animation: slide-right 30s linear infinite;
        }

        .animate-slide-left {
          animation: slide-left 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TechStackSection;

