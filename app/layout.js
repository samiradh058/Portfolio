import "@/app/globals.css";
import Children from "@/components/children";
import Header from "@/components/header";
import { ThemeProvider } from "@/context/ColorContext";

export const metadata = {
  title: "Samir Adhikari",
  description: "Personal portfolio website of Samir Adhikari",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className="flex flex-col justify-center items-center">
          <Header />
          <Children>{children}</Children>
        </body>
      </ThemeProvider>
    </html>
  );
}
