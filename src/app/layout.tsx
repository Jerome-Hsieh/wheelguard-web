import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const poppins = Poppins({ weight: ["300", "400", "400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs Authentication",
  description: "Nextjs Authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant-TW">
      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body> */}
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
