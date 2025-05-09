
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const whatsappNumber = "83188186757";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Pesan berhasil dikirim! Tim kami akan segera menghubungi Anda.");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleWhatsAppChat = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Kami</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ada pertanyaan atau ingin mendiskusikan proyek Anda? Hubungi kami sekarang untuk konsultasi gratis!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border border-border col-span-1">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                Informasi Kontak
                <Badge variant="secondary" className="ml-2">Online 24/7</Badge>
              </CardTitle>
              <CardDescription>
                Hubungi kami melalui berbagai channel berikut
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Telepon</p>
                  <p className="text-muted-foreground">+62-83188186757</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">info@jokitugas.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Alamat</p>
                  <p className="text-muted-foreground">
                    Jl. Teknologi No. 123, Jakarta Selatan, Indonesia
                  </p>
                </div>
              </div>

              <Separator />
              
              <div className="pt-2">
                <p className="font-medium mb-3">Konsultasi Cepat</p>
                <Button 
                  onClick={handleWhatsAppChat}
                  className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  Chat WhatsApp Sekarang
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border col-span-1 md:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl">Kirim Pesan</CardTitle>
              <CardDescription>
                Isi form berikut untuk menghubungi kami
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nama Lengkap
                    </label>
                    <Input
                      id="name"
                      placeholder="Masukkan nama lengkap"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Masukkan email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subjek
                  </label>
                  <Input
                    id="subject"
                    placeholder="Subjek pesan"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Pesan
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tuliskan pesan anda..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
