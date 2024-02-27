import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Provider from "@/providers/session-provider";
import { Toaster } from "@/components/ui/sonner";

const gilroy = localFont({
  src: [
    {
      path: "../assets/fonts/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://read-journey-liard.vercel.app/"),
  title: {
    template: "%s | Read Journey",
    default: "Read Journey",
  },
  description:
    "Discover the whole new world of reading with powerfull and convinient Read Journey app!",

  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icon.svg",
        href: "/icon.svg",
      },

      {
        media: "(prefers-color-scheme: dark)",
        url: "/icon-light.svg",
        href: "/icon-light.svg",
      },
    ],
  },

  openGraph: {
    title: "Read Journey",
    description:
      "Discover the whole new world of reading with powerfull and convinient Read Journey app! Start embracing new healty habbits via features and tools developed specially for you!",

    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body className={gilroy.className}>
          <main>{children}</main>
          <Toaster richColors duration={2500} />
        </body>
      </Provider>
    </html>
  );
}
