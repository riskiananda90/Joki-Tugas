import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "Saya sangat puas dengan hasil pengerjaan website toko online saya. Desainnya menarik dan fungsionalitas sesuai dengan yang saya harapkan. Terima kasih JokiTugas!",
    author: "Teuku Aldie aulia",
    role: "Pemilik Rumah Aceh",
    rating: 5,
  },
  {
    id: 2,
    content:
      "Tugas akhir saya selesai tepat waktu berkat bantuan tim JokiTugas. Saya mendapatkan nilai A dan dosen sangat terkesan dengan kualitas kode dan dokumentasinya.",
    author: "Zachra Almira",
    role: "Mahasiswa Teknik Informatika",
    rating: 5,
  },
  {
    id: 3,
    content:
      "Aplikasi mobile untuk bisnis saya dibuat dengan sangat profesional. User interface-nya mudah digunakan dan semua fitur berfungsi dengan baik. Sangat merekomendasikan!",
    author: "Muhammad Rafli Aulia",
    role: "Bangkit Academy",
    rating: 4,
  },
  {
    id: 4,
    content:
      "JokiTugas membantu saya dalam mengerjakan tugas pemrograman yang sulit. Selain memberikan kode yang berfungsi, mereka juga menjelaskan logika di baliknya sehingga saya bisa belajar.",
    author: "Afifah Dwi Lhokseum",
    role: "Pemilik Doorsmear",
    rating: 5,
  },
];

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < rating ? "text-accent fill-accent" : "text-muted"
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonial</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Apa kata klien tentang layanan kami? Berikut adalah beberapa
            testimonial dari klien yang telah menggunakan jasa kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-border">
              <CardContent className="pt-6">
                <RatingStars rating={testimonial.rating} />
                <p className="mt-4 text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <h4 className="font-semibold">{testimonial.author}</h4>
                <p className="text-muted-foreground">{testimonial.role}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
