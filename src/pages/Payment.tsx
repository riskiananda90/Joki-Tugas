import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/sonner";
import { useNavigate } from "react-router-dom";
import { CreditCard, Receipt } from "lucide-react";

const paymentMethods = [
  {
    id: "dana",
    name: "DANA",
    accountNumber: "083175907290",
    accountName: "Riski Ananda",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg",
  },
  {
    id: "bsi",
    name: "BSI",
    accountNumber: "7180708752",
    accountName: "Rizki Ananda",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Bank_Syariah_Indonesia.svg",
  },
];

type FormValues = {
  name: string;
  email: string;
  phoneNumber: string;
  paymentMethod: string;
  proofImage: FileList;
  description: string;
};

const Payment = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(window.location.search);
  const packageName = searchParams.get("package") || "Basic";
  const packagePrice = searchParams.get("price") || "Rp 99K";

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      paymentMethod: "",
      description: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      const orderNumber = generateOrderNumber();

      setOrderDetails({
        ...data,
        orderNumber,
        package: packageName,
        price: packagePrice,
        date: new Date().toLocaleDateString("id-ID", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
        time: new Date().toLocaleTimeString("id-ID"),
      });

      setShowConfirmation(true);
      toast.success("Pembayaran berhasil diunggah!");
    }, 1500);
  };

  const generateOrderNumber = () => {
    const date = new Date();
    const year = date.getFullYear().toString().slice(2);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const random = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0");

    return `JT${year}${month}${day}${random}`;
  };

  const handleComplete = () => {
    navigate("/order-status?order=" + orderDetails.orderNumber);
  };

  const selectedPaymentMethod = form.watch("paymentMethod");
  const paymentInfo = paymentMethods.find(
    (method) => method.id === selectedPaymentMethod
  );

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-8">Pembayaran</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle>Detail Pembayaran</CardTitle>
                    <CardDescription>
                      Silakan lengkapi informasi berikut untuk melanjutkan
                      pesanan Anda
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                      >
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nama Lengkap</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Masukkan nama lengkap"
                                  {...field}
                                  required
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="email@example.com"
                                    {...field}
                                    required
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nomor Telepon</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="08xxxxxxxxxx"
                                    {...field}
                                    required
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="paymentMethod"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Metode Pembayaran</FormLabel>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                                {paymentMethods.map((method) => (
                                  <div
                                    key={method.id}
                                    className={`border rounded-lg p-4 cursor-pointer transition-all
                                    ${
                                      field.value === method.id
                                        ? "border-primary bg-primary/5 shadow-md"
                                        : "border-border hover:border-primary/50"
                                    }`}
                                    onClick={() =>
                                      form.setValue("paymentMethod", method.id)
                                    }
                                  >
                                    <div className="h-8 flex items-center justify-center mb-2">
                                      <img
                                        src={method.logo}
                                        alt={method.name}
                                        className="max-h-full object-contain"
                                      />
                                    </div>
                                    <p className="text-center text-sm">
                                      {method.name}
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {paymentInfo && (
                          <div className="bg-muted/50 p-4 rounded-lg border border-dashed">
                            <p className="font-medium text-lg">
                              {paymentInfo.name}
                            </p>
                            <p className="mt-1">
                              No. Rekening:{" "}
                              <span className="font-mono font-medium">
                                {paymentInfo.accountNumber}
                              </span>
                            </p>
                            <p className="mt-1">
                              Atas Nama:{" "}
                              <span className="font-medium">
                                {paymentInfo.accountName}
                              </span>
                            </p>
                          </div>
                        )}

                        <FormField
                          control={form.control}
                          name="proofImage"
                          render={({
                            field: { value, onChange, ...field },
                          }) => (
                            <FormItem>
                              <FormLabel>Bukti Pembayaran</FormLabel>
                              <FormControl>
                                <Input
                                  type="file"
                                  accept="image/*"
                                  required
                                  onChange={(e) => onChange(e.target.files)}
                                  {...field}
                                />
                              </FormControl>
                              <p className="text-sm text-muted-foreground">
                                Unggah bukti transfer atau pembayaran Anda
                                (Maks. 2MB)
                              </p>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="description"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Deskripsi Pesanan</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Jelaskan detail pesanan Anda"
                                  className="min-h-[120px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          className="w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting
                            ? "Memproses..."
                            : "Konfirmasi Pembayaran"}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="sticky top-24 border-primary">
                  <CardHeader className="bg-primary/10 rounded-t-lg">
                    <CardTitle className="text-xl">Ringkasan Pesanan</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-muted-foreground text-sm">Paket</p>
                        <p className="font-medium text-lg">{packageName}</p>
                      </div>

                      <div className="border-t pt-4">
                        <p className="text-muted-foreground text-sm">
                          Total Pembayaran
                        </p>
                        <p className="font-bold text-2xl text-primary">
                          {packagePrice}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-muted/50 rounded-b-lg flex-col items-start text-sm text-muted-foreground">
                    <p className="flex items-center gap-1">
                      <Receipt className="h-4 w-4" />
                      <span>Konfirmasi otomatis dalam 1x24 jam</span>
                    </p>
                    <p className="flex items-center gap-1 mt-1">
                      <CreditCard className="h-4 w-4" />
                      <span>Pembayaran aman & terenkripsi</span>
                    </p>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </main>
        <Footer />

        <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Pembayaran Berhasil!</DialogTitle>
              <DialogDescription>
                Terima kasih atas pesanan Anda. Berikut adalah detail pesanan
                Anda.
              </DialogDescription>
            </DialogHeader>

            {orderDetails && (
              <div className="space-y-4">
                <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
                  <p className="text-center font-medium">
                    No. Pesanan:{" "}
                    <span className="font-bold">
                      {orderDetails.orderNumber}
                    </span>
                  </p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <p className="text-muted-foreground">Paket:</p>
                    <p className="font-medium">{orderDetails.package}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-muted-foreground">Harga:</p>
                    <p className="font-medium">{orderDetails.price}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-muted-foreground">Tanggal:</p>
                    <p className="font-medium">{orderDetails.date}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-muted-foreground">Waktu:</p>
                    <p className="font-medium">{orderDetails.time}</p>
                  </div>
                </div>
              </div>
            )}

            <DialogFooter>
              <Button onClick={handleComplete} className="w-full sm:w-auto">
                Lihat Status Pesanan
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </ThemeProvider>
  );
};

export default Payment;
