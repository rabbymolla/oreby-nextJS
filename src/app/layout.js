import { DM_Sans } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "home",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png", // For Apple devices
    android: "/favicon.png", // For Android devices
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href={metadata.icons.icon} />
        <link rel="apple-touch-icon" href={metadata.icons.apple} />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={metadata.icons.android}
        />
      </Head>
      <body className={`${dmSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
