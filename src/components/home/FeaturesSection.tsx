
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Shield, Clock, CreditCard, Star, FileSpreadsheet } from "lucide-react";

const features = [
  {
    title: "Keamanan Terjamin",
    description: "Data dan pembayaran Anda terlindungi dengan sistem enkripsi terbaik",
    icon: Shield,
    color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
  },
  {
    title: "Pengerjaan Cepat",
    description: "Tim profesional kami mengutamakan ketepatan waktu dalam setiap proyek",
    icon: Clock,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
  },
  {
    title: "Pembayaran Fleksibel",
    description: "Berbagai metode pembayaran yang aman dan nyaman untuk Anda",
    icon: CreditCard,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
  },
  {
    title: "Kualitas Terbaik",
    description: "Hasil kerja berkualitas dengan standar profesional dan akademik",
    icon: Star,
    color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
  },
  {
    title: "Dokumentasi Lengkap",
    description: "Setiap pekerjaan dilengkapi dengan dokumentasi yang rinci dan mudah dipahami",
    icon: FileSpreadsheet,
    color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
  },
  {
    title: "Garansi Kepuasan",
    description: "Jaminan revisi sesuai ketentuan hingga Anda puas dengan hasilnya",
    icon: Check,
    color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">Keunggulan Kami</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Memilih Kami?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami menawarkan layanan dengan standar profesional dan beragam keunggulan untuk memastikan kepuasan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {index === 0 && (
                    <>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span>Pembayaran terenkripsi</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span>Data aman dan terlindungi</span>
                      </li>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span>Pengerjaan tepat waktu</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span>Estimasi waktu yang jelas</span>
                      </li>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span>Transfer bank</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span>E-Wallet (DANA, OVO, GoPay)</span>
                      </li>
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span>Tim profesional berpengalaman</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span>Standar kode yang tinggi</span>
                      </li>
                    </>
                  )}
                  {index === 4 && (
                    <>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span>Laporan dan penjelasan detail</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span>Panduan penggunaan</span>
                      </li>
                    </>
                  )}
                  {index === 5 && (
                    <>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span>Revisi sesuai paket</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span>Dukungan pasca pengerjaan</span>
                      </li>
                    </>
                  )}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
