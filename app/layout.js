import "@/app/globals.css";
import Header from "@/components/header";
import { DarkModeProvider } from "@/context/DarkModeContext";

export const metadata = {
  title: "Samir Adhikari",
  description: "Personal portfolio website of Samir Adhikari",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <DarkModeProvider>
        <body className="bg-light-bg dark:bg-dark-bg h-screen grid grid-rows-8">
          <div className="grid row-span-1">
            <Header />
          </div>
          <div className="grid row-span-7 xl:w-[88%] w-[92%] mx-auto">
            {children}
          </div>
        </body>
      </DarkModeProvider>
    </html>
  );
}
