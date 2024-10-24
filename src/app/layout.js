import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
// import ScrollButton from "@src/components/ScrollButton";

export const metadata = {
  title: "KD Farms",
  description: "Farms",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="mt-24">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
