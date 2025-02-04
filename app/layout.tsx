import type { Metadata } from "next";
import { Edu_AU_VIC_WA_NT_Hand } from "next/font/google";
import "./globals.css";

const eduAuvicwantHand = Edu_AU_VIC_WA_NT_Hand({
  variable: "--edu-auvicwant-hand",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Self Vaul Privacy Policy",
  description: "Self Vaul Privacy Policy"
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body
        className={`${eduAuvicwantHand.variable} antialiased bg-cream`}
      >
        {children}
      </body>
    </html>
  )
}
