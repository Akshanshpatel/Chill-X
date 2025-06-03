import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter, Roboto, Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
// import AuthProvider from "@/components/AuthProvider/AuthProvider";
import {
  ClerkProvider,
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akshansh",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {/* <AuthProvider> */}
         <ClerkProvider>
           <div className="container">
             <Navbar />
             {children}
             <Footer />
           </div>
         </ClerkProvider>
          {/* </AuthProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}