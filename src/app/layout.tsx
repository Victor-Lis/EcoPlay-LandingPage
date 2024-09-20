import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CapProvider } from "@/providers/CapContext";
import { HistoryProvider } from "@/providers/HistoryContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eco-Play!",
  description: "Um incentivo a sustentabilidade e reciclagem através da gamificação!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <CapProvider>
          <HistoryProvider>
            {children}
          </HistoryProvider>
        </CapProvider>
      </body>
    </html>
  );
}
