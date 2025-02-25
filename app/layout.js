import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap"
});

console.log(josefin);
export const metadata = {
  // title: "The Wild Oasis"
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis"
  },
  description:
    "Luxirious cabin hotel,located in the heart of the Pune city,surrounded by beautiful mountains and dark forests"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        {/* <header>
          <Logo />
          <Navigation />
        </header> */}
        <div className="flex-1 px-8 py-12 bg-blue-200">
          <main className="max-w-7xl mx-auto bg-red-500">
            {children}
          </main>
        </div>
        {/* <footer>Copyright by the wild Oasis</footer> */}
      </body>
    </html>
  );
}
