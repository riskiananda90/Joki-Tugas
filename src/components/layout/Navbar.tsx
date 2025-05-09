import { useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleScroll = (section) => {
    const sectionScroll = document.getElementById(section);
    if (sectionScroll) {
      sectionScroll.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto py-4 px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-xl font-bold text-gradient">JokiTugas</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <span
              onClick={() => handleScroll("services")}
              className="text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
            >
              Layanan
            </span>
            <span
              onClick={() => handleScroll("pricing")}
              className="text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
            >
              Harga
            </span>
            <span
              onClick={() => handleScroll("process")}
              className="text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
            >
              Cara Kerja
            </span>
            <span
              onClick={() => handleScroll("testimonials")}
              className="text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
            >
              Testimoni
            </span>
            <span
              onClick={() => handleScroll("contact")}
              className="text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
            >
              Kontak
            </span>
            <ThemeToggle />
            <Button onClick={() => handleScroll("pricing")}>
              Pesan Sekarang
            </Button>
          </div>

          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Layanan
              </a>
              <a
                href="#pricing"
                className="text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Harga
              </a>
              <a
                href="#process"
                className="text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Cara Kerja
              </a>
              <a
                href="#testimonials"
                className="text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Testimoni
              </a>
              <a
                href="#contact"
                className="text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Kontak
              </a>
              <Button className="w-full">Pesan Sekarang</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
