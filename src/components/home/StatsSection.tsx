
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Users, CheckCircle, Award } from "lucide-react";

const stats = [
  { 
    icon: Users, 
    value: 500, 
    label: "Klien Puas", 
    suffix: "+",
    color: "text-blue-500" 
  },
  { 
    icon: CheckCircle, 
    value: 1250, 
    label: "Projek Selesai", 
    suffix: "+",
    color: "text-green-500" 
  },
  { 
    icon: Clock, 
    value: 99, 
    label: "Pengerjaan Tepat Waktu", 
    suffix: "%",
    color: "text-yellow-500" 
  },
  { 
    icon: Award, 
    value: 4.9, 
    label: "Rating Kepuasan", 
    suffix: "/5",
    color: "text-purple-500" 
  }
];

const StatsCounter = ({ value, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = parseInt(value.toString().substring(0, 3));
    // Check if the value is a float (has decimal places)
    const hasDecimal = value % 1 !== 0;
    const incrementTime = (duration / end) * 1000;
    
    let timer;
    
    const run = () => {
      setCount(start);
      start += 1;
      
      if (start <= end) {
        timer = setTimeout(run, incrementTime);
      }
    };
    
    run();
    
    return () => clearTimeout(timer);
  }, [value, duration, isInView]);
  
  return (
    <div ref={nodeRef} className="text-4xl md:text-5xl font-bold">
      {value % 1 !== 0 ? count.toFixed(1) : count}{suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pencapaian Kami</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berkomitmen pada kualitas dan kepuasan klien dalam setiap proyek dan tugas
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className={`mb-4 p-3 rounded-full bg-muted ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <StatsCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
