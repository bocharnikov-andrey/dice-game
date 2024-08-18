import type { Metadata } from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme/typography";

const roboto = Roboto({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Dice game page",
  description: "Main page of Dice game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
