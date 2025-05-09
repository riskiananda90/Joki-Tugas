
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, X, Phone, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "083188186757";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppChat = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  const handleConsultation = () => {
    // Scroll to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-24'}`}>
      {isOpen && (
        <div className="bg-card rounded-lg shadow-lg p-4 mb-4 border border-border animate-fadeIn max-w-xs">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-medium flex items-center gap-2">
                Butuh bantuan? 
                <Badge variant="secondary" className="text-xs animate-pulse">Online</Badge>
              </h3>
              <p className="text-xs text-muted-foreground">Respon cepat dalam 5 menit</p>
            </div>
            <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mb-4">
            Tim kami siap membantu Anda dengan kebutuhan tugas dan proyek. Konsultasi gratis!
          </p>
          
          <div className="space-y-3">
            <Button 
              onClick={handleWhatsAppChat}
              className="w-full text-sm h-9 flex items-center gap-2 bg-green-600 hover:bg-green-700"
            >
              <Phone className="h-4 w-4" />
              Chat WhatsApp
              <ExternalLink className="h-3 w-3 ml-auto" />
            </Button>
            
            <Separator className="my-2" />
            
            <div className="text-xs text-center text-muted-foreground">atau</div>
            
            <Button 
              onClick={handleConsultation}
              className="w-full text-sm h-9"
            >
              Konsultasi Sekarang
            </Button>
          </div>
        </div>
      )}
      
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-14 w-14 rounded-full shadow-lg ${isOpen ? 'bg-muted text-foreground' : 'bg-primary text-primary-foreground'} hover:scale-105 transition-all duration-200`}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageSquare className="h-6 w-6 animate-pulse" />
        )}
      </Button>
    </div>
  );
};

export default FloatingCTA;
