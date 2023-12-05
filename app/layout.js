import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/ui/Header";
import Footer from "@/components/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Pizza paradise",
  description: "We provide delicious pizzzas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Header />
        <main className=" ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
