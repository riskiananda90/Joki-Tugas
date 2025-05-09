import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeftCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-gray-200 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full text-center animate-fade-in">
        <div className="text-red-500 mb-4">
          <svg
            className="mx-auto w-20 h-20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 8v4m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-5xl font-extrabold text-gray-800 mb-3">404</h1>
        <p className="text-gray-600 text-lg mb-6">
          Halaman yang kamu cari tidak ditemukan.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-lg"
        >
          <ArrowLeftCircle className="mr-2 w-5 h-5" />
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
};

export default NotFound;
