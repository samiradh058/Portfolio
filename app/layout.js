import "@/app/globals.css";
import Header from "@/components/header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-light-bg h-screen grid grid-rows-10">
        <div className="grid row-span-1">
          <Header />
        </div>
        <div className="grid row-span-9">{children}</div>
      </body>
    </html>
  );
}
