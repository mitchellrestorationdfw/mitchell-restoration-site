export const metadata = {
  title: "Mitchell Carpet Cleaning & Restoration",
  description: "DFW carpet cleaning, water extraction, odor removal, builder warranty support, and restoration services.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
