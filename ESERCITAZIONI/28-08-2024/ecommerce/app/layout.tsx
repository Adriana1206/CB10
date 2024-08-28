import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { ReactNode } from "react";

// Interfaccia che descrive il tipo di children
interface LayoutProps {
  children: ReactNode;
  // ReactNode in TypeScript rappresenta qualsiasi 
  // cosa che può essere renderizzata da React
}

export default function RootLayout({ children }: LayoutProps) { // Destructuring
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
