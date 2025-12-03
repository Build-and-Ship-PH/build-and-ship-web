import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ship or Be Shipped | Build, Learn, Connect",
  description:
    "An immersive 24-hour hackathon designed for creatives, engineers, and founders. Ship meaningful ideas, discover new collaborators, and help shape the future of our builder community.",
  icons: {
    icon: "/assets/circle-logo.png",
    shortcut: "/assets/circle-logo.png",
    apple: "/assets/circle-logo.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
