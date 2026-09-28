import "./globals.css";

export const metadata = {
  title: "Edwin Caudilla Daza | Funnel Builder Portfolio",
  description: "Funnel Builder & Digital Marketing Specialist portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
