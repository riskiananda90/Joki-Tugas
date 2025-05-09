
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check, Clock, FileSpreadsheet } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock data for order tracking
const mockOrderData = {
  "JT2505110001": {
    orderNumber: "JT2505110001",
    package: "Premium",
    price: "Rp 299K",
    customer: "Budi Santoso",
    date: "11 Mei 2025",
    status: "in-progress",
    estimatedCompletion: "15 Mei 2025",
    description: "Website portfolio personal dengan 5 halaman",
    steps: [
      { step: "Pembayaran", completed: true, date: "11 Mei 2025, 14:30" },
      { step: "Konfirmasi Admin", completed: true, date: "11 Mei 2025, 15:45" },
      { step: "Pengerjaan", completed: false, date: "-" },
      { step: "Selesai", completed: false, date: "-" },
      { step: "Pengiriman", completed: false, date: "-" }
    ]
  },
  "JT2505090002": {
    orderNumber: "JT2505090002",
    package: "Basic",
    price: "Rp 99K",
    customer: "Dewi Lestari",
    date: "09 Mei 2025",
    status: "completed",
    estimatedCompletion: "12 Mei 2025",
    description: "Tugas pemrograman Python",
    steps: [
      { step: "Pembayaran", completed: true, date: "09 Mei 2025, 10:15" },
      { step: "Konfirmasi Admin", completed: true, date: "09 Mei 2025, 11:20" },
      { step: "Pengerjaan", completed: true, date: "11 Mei 2025, 09:30" },
      { step: "Selesai", completed: true, date: "11 Mei 2025, 14:00" },
      { step: "Pengiriman", completed: true, date: "11 Mei 2025, 14:05" }
    ]
  }
};

const OrderStatus = () => {
  const [orderData, setOrderData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const searchParams = new URLSearchParams(window.location.search);
  const orderNumber = searchParams.get('order');
  
  useEffect(() => {
    // Simulate API call to get order data
    setTimeout(() => {
      setLoading(false);
      
      if (!orderNumber) {
        setError("No order number provided");
        return;
      }
      
      const order = mockOrderData[orderNumber as keyof typeof mockOrderData];
      if (order) {
        setOrderData(order);
      } else {
        // Try to create a mock order from localStorage if it's a new order
        try {
          const mockOrder = {
            orderNumber: orderNumber,
            package: localStorage.getItem('package') || "Basic",
            price: localStorage.getItem('price') || "Rp 99K",
            customer: localStorage.getItem('name') || "Customer",
            date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }),
            status: "pending",
            estimatedCompletion: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('id-ID', { 
              day: '2-digit', month: 'long', year: 'numeric' 
            }),
            description: localStorage.getItem('description') || "New order",
            steps: [
              { step: "Pembayaran", completed: true, date: new Date().toLocaleString('id-ID') },
              { step: "Konfirmasi Admin", completed: false, date: "-" },
              { step: "Pengerjaan", completed: false, date: "-" },
              { step: "Selesai", completed: false, date: "-" },
              { step: "Pengiriman", completed: false, date: "-" }
            ]
          };
          setOrderData(mockOrder);
        } catch (e) {
          setError("Order not found");
        }
      }
    }, 1000);
  }, [orderNumber]);
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">Menunggu Konfirmasi</Badge>;
      case "in-progress":
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">Dalam Pengerjaan</Badge>;
      case "completed":
        return <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">Selesai</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-8">Status Pesanan</h1>
            
            {loading ? (
              <Card className="mx-auto max-w-3xl">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center justify-center py-8">
                    <div className="h-12 w-12 rounded-full border-4 border-t-primary border-r-primary border-b-primary/30 border-l-primary/30 animate-spin"></div>
                    <p className="mt-4 text-muted-foreground">Memuat data pesanan...</p>
                  </div>
                </CardContent>
              </Card>
            ) : error ? (
              <Card className="mx-auto max-w-3xl">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                      <FileSpreadsheet className="h-8 w-8 text-destructive" />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Pesanan Tidak Ditemukan</h2>
                    <p className="text-muted-foreground mb-6">{error}</p>
                    <Button onClick={() => navigate('/')}>Kembali ke Beranda</Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>Pesanan #{orderData.orderNumber}</CardTitle>
                          <CardDescription>Dibuat pada {orderData.date}</CardDescription>
                        </div>
                        {getStatusBadge(orderData.status)}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium">Detail Pesanan</h3>
                          <div className="mt-4 space-y-3">
                            <div className="grid grid-cols-2">
                              <p className="text-muted-foreground">Paket</p>
                              <p className="font-medium">{orderData.package}</p>
                            </div>
                            <div className="grid grid-cols-2">
                              <p className="text-muted-foreground">Harga</p>
                              <p className="font-medium">{orderData.price}</p>
                            </div>
                            <div className="grid grid-cols-2">
                              <p className="text-muted-foreground">Perkiraan Selesai</p>
                              <p className="font-medium">{orderData.estimatedCompletion}</p>
                            </div>
                            <div className="grid grid-cols-2">
                              <p className="text-muted-foreground">Deskripsi</p>
                              <p className="font-medium">{orderData.description}</p>
                            </div>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h3 className="text-lg font-medium mb-4">Status Pengerjaan</h3>
                          <div className="relative">
                            {/* Progress line */}
                            <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-muted"></div>
                            
                            {orderData.steps.map((step: any, index: number) => (
                              <div key={index} className="relative pl-10 pb-8 last:pb-0">
                                <div className={`absolute left-0 top-0.5 h-5 w-5 rounded-full ${
                                  step.completed ? 'bg-primary text-primary-foreground' : 'bg-muted border-2 border-muted-foreground'
                                } flex items-center justify-center`}>
                                  {step.completed && <Check className="h-3 w-3" />}
                                </div>
                                <div>
                                  <p className="font-medium">{step.step}</p>
                                  <p className="text-sm text-muted-foreground">{step.date}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <Card className="sticky top-24">
                    <CardHeader className="bg-primary/10 rounded-t-lg">
                      <CardTitle className="text-xl">Bantuan</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex gap-3 items-start">
                          <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">Update Realtime</p>
                            <p className="text-sm text-muted-foreground">Halaman ini akan otomatis menampilkan status terbaru pesanan Anda</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-3 items-start">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">Garansi Kepuasan</p>
                            <p className="text-sm text-muted-foreground">Jika tidak puas, kami siap untuk melakukan revisi sesuai ketentuan paket</p>
                          </div>
                        </div>
                        
                        <Button className="w-full mt-2" variant="outline">
                          Hubungi Admin
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default OrderStatus;
