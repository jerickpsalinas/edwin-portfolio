import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://edwin-daza.vercel.app"),
  title: "Edwin Caudilla Daza | Funnel Builder Portfolio",
  description:
    "Funnel Builder specializing in Funnelish and Shopify e-commerce — sales funnels, landing pages, checkout pages, and more.",
  openGraph: {
    title: "Edwin Caudilla Daza | Funnel Builder Portfolio",
    description:
      "Funnel Builder specializing in Funnelish and Shopify e-commerce.",
    images: ["/images/edwin-photo.webp"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
