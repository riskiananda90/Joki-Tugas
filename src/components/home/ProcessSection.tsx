
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Konsultasi",
    description:
      "Diskusikan kebutuhan Anda dengan tim kami untuk mendapatkan estimasi harga dan waktu pengerjaan yang akurat."
  },
  {
    number: "02",
    title: "Pembayaran",
    description:
      "Lakukan pembayaran uang muka untuk memulai proses pengerjaan proyek Anda."
  },
  {
    number: "03",
    title: "Pengerjaan",
    description:
      "Tim ahli kami akan mulai mengerjakan tugas atau proyek Anda dengan standar kualitas tertinggi."
  },
  {
    number: "04",
    title: "Revisi",
    description:
      "Dapatkan hasil pekerjaan dan ajukan revisi jika diperlukan sesuai dengan paket yang Anda pilih."
  },
  {
    number: "05",
    title: "Selesai",
    description:
      "Terima hasil akhir yang sudah direvisi dan dokumentasi lengkap sesuai kebutuhan."
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cara Kerja</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proses pengerjaan yang transparan dan terstruktur untuk memberikan hasil terbaik untuk Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="border border-border relative">
              <div className="absolute top-4 right-4 text-5xl font-bold text-muted/20">
                {step.number}
              </div>
              <CardHeader className="pt-12">
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="hidden md:flex justify-center mt-8">
          <div className="w-4/5 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
