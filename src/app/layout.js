import { Rosarivo, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const rosarivo = Rosarivo({
  weight: ["400"],
  variable: "--font-rosarivo",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata = {
  title: "DigitalBoost - Digital Marketing Agency",
  description: "Transform your digital presence with our comprehensive digital marketing solutions. SEO, Social Media Marketing, and Web Development services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
