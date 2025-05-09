import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const pricingPlans = [
  {
    name: "Basic",
    price: "Rp 99K",
    description: "Untuk tugas kecil & sederhana",
    features: [
      "Pengerjaan 1-3 hari",
      "1x revisi",
      "Laporan pengerjaan",
      "Konsultasi via chat",
      "Hanya tampilan tanpa database",
    ],
    priceId: "price_basic",
  },
  {
    name: "Premium",
    price: "Rp 299K",
    description: "Untuk tugas menengah & website sederhana",
    features: [
      "Pengerjaan 3-5 hari",
      "3x revisi",
      "Laporan pengerjaan detail",
      "Konsultasi via chat & video call",
      "Source code lengkap",
      "Dukungan 7 hari",
      "Database sederhana",
    ],
    popular: true,
    priceId: "price_premium",
  },
  {
    name: "Ultimate",
    price: "Rp 999K+",
    description: "Untuk proyek kompleks & aplikasi besar",
    features: [
      "Pengerjaan sesuai kesepakatan",
      "Revisi unlimited",
      "Dokumentasi lengkap",
      "Konsultasi priority",
      "Source code + deployment",
      "Dukungan 30 hari",
      "Maintenance 3 bulan",
      "Database kompleks",
    ],
    priceId: "price_ultimate",
  },
];

const PricingSection = () => {
  const navigate = useNavigate();

  const handleSelectPackage = (plan: (typeof pricingPlans)[0]) => {
    // Store selected plan in localStorage for reference
    localStorage.setItem("package", plan.name);
    localStorage.setItem("price", plan.price);

    // Navigate to payment page with query params
    navigate(
      `/payment?package=${encodeURIComponent(
        plan.name
      )}&price=${encodeURIComponent(plan.price)}`
    );
  };

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">
            Pilihan Paket
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Paket Harga</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami menawarkan harga yang kompetitif untuk setiap layanan kami.
            Pilih paket yang sesuai dengan kebutuhan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.popular
                  ? "border-primary shadow-lg shadow-primary/20 relative overflow-hidden"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <>
                  <div className="absolute top-0 right-0">
                    <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                      <Star className="h-3 w-3" /> POPULER
                    </div>
                  </div>
                  <div className="absolute -left-16 -top-16 h-32 w-32 bg-primary/10 rounded-full blur-3xl"></div>
                </>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular ? "bg-primary hover:bg-primary/90" : ""
                  }`}
                  onClick={() => handleSelectPackage(plan)}
                >
                  Pilih Paket
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-muted/50 rounded-xl p-6 border border-muted">
          <h3 className="text-xl font-semibold text-center mb-4">
            Butuh Paket Khusus?
          </h3>
          <p className="text-center text-muted-foreground mb-4">
            Kami juga menyediakan paket kustom sesuai kebutuhan spesifik Anda.
            Hubungi tim kami untuk konsultasi gratis.
          </p>
          <div className="flex justify-center">
            <Button variant="outline" className="mr-2">
              Chat Sekarang
            </Button>
            <Button>Konsultasi Gratis</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
