import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme/ThemeProvider";
import { AuthProvider } from "./context/AuthContext";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata = {
  title: "CampUs",
  description: "Divulgação de imóveis para universitários",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-br"
      suppressHydrationWarning
      className={`${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#EFEFFF] dark:bg-[#131318]">
        <ThemeProvider>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
