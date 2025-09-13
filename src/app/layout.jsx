import "./globals.css";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import SessionWrapper from "./_components/SessionWrapper";
import { CartProvider } from "@/app/context/CartContext"; 
export const metadata = {
  title: "Online Learning Platform",
  description: "This is a Next.js App Router project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-kantumruy">
        <SessionWrapper>
          <CartProvider>  
            <NavBar />
              <div className="min-h-screen">
                {children}
              </div>
            <Footer />
          </CartProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
