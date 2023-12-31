import "./globals.css";
import Header from "./components/Header";
import { Providers } from "./Redux/services/provider";
import Footer from "./components/Footer";
import authProvider from "./Redux/services/AuthProvider";

export const metadata = {
    title: "Next.js",
    description: "Generated by Next.js",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className='bg-base-200'>
               
               <Providers>
                    <Header />
                    {children}
                    <Footer/>
                </Providers>
               
            </body>
        </html>
    );
}
