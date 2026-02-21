import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fazer – Coming Soon",
  description:
    "Connect with your favorite artists and their communities, discover new music, and share your own creations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        <Script
          src="https://fazer.zammad.com/assets/chat/chat-no-jquery.min.js"
          strategy="afterInteractive"
        />

        <Script id="zammad-chat-init" strategy="afterInteractive">
          {`
            (function() {
              if (window.ZammadChat) {
                new ZammadChat({
                  title: '<strong>Chat with us!</strong> We\\'re here to help!',
                  background: '#5c18db',
                  fontSize: '12px',
                  chatId: 1
                });
              }
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
