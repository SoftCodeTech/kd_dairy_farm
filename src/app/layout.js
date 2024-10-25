import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollButton from "@/components/ScrollButton";
import WhatsAooLinkButton from "@/components/WhatsAooLinkButton";
import "./globals.css";

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
        <ScrollButton />
        <WhatsAooLinkButton />
      </body>
    </html>
  );
}
