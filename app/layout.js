import "./globals.css";

export const metadata = {
  title: "Edwin Caudilla Daza | Funnel Builder Portfolio",
  description: "Funnel Builder & Digital Marketing Specialist portfolio",
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
