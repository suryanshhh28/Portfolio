import { Inter } from "next/font/google";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";
import TransitionProvider from "@/components/transitionProvider";

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Suryansh Chaudhary",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefin_sans.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
