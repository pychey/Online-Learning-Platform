// import "./globals.css";
// import NavBar from "@/components/ui/NavBar";
// import Footer from "@/components/ui/Footer";

// export const metadata = {
//   title: "Online Learning Platform",
//   description: "This is a Next.js App Router project",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" data-scroll-behavior="smooth">
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,100..700;1,100..700&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body className="font-kantumruy">
//           {/* cz-shortcut-listen="true" */}
//         <NavBar />
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }


import "./globals.css";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import SessionWrapper from "./SessionWrapper"; // Import the wrapper
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
            {children}
            <Footer />
          </CartProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
