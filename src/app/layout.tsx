import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

 const RootLayout=({
  children,
}: {
  children: React.ReactNode;
}) =>{
  return (
    <html className="dark" lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className= {`${inter.className} bg-white dark:bg-background dark:text-white`} >
      <Header />
        <main className="container mx-auto md:px-24 px-4">
          
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout