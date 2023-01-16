import Header from "@/components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-white dark:bg-zinc-900 dark:text-white  ">
      <Header />
        <main className="container mx-auto md:px-48 px-4">
          
          {children}
        </main>
      </body>
    </html>
  );
}
