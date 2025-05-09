
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Globe, Laptop, PenTool, Smartphone, BookOpen } from "lucide-react";

const services = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Tugas Coding",
    description: "Bantuan untuk tugas pemrograman, website, aplikasi, database, dan coding lainnya."
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Website Development",
    description: "Pembuatan website profesional, responsif, dan SEO friendly sesuai kebutuhan Anda."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Mobile App Development",
    description: "Pengembangan aplikasi mobile untuk Android dan iOS dengan UI/UX yang menarik."
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Tugas Akademik",
    description: "Bantuan untuk tugas kuliah, skripsi, paper, atau tugas akademik lainnya."
  },
  {
    icon: <PenTool className="h-10 w-10 text-primary" />,
    title: "Desain UI/UX",
    description: "Pembuatan desain antarmuka yang menarik, intuitif dan user-friendly."
  },
  {
    icon: <Laptop className="h-10 w-10 text-primary" />,
    title: "Tugas Akhir",
    description: "Bantuan untuk tugas akhir, skripsi, atau proyek akhir dengan kualitas terbaik."
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Kami</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami menawarkan berbagai jasa profesional untuk membantu Anda menyelesaikan tugas
            akademik dan kebutuhan pengembangan digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
