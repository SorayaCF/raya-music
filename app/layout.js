import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Raya",
  description: "Raya Music",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${montserrat.className} bg-gray-950`}>{children}</body>
    </html>
  );
}
