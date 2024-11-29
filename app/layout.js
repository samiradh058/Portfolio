import "@/app/globals.css";
import Header from "@/components/header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-light-bg h-screen grid grid-rows-8">
        <div className="grid row-span-1">
          <Header />
        </div>
        <div className="grid row-span-7 xl:w-[88%] w-[92%] mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
