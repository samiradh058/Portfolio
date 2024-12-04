import "@/app/globals.css";
import { ThemeProvider } from "@/context/ColorContext";
import Main from "@/components/main";

export const metadata = {
  title: "Samir Adhikari",
  description: "Personal portfolio website of Samir Adhikari",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <Main>{children}</Main>
      </ThemeProvider>
    </html>
  );
}
