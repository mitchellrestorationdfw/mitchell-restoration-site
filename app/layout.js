export const metadata = {
  title: 'Mitchell Carpet Cleaning & Restoration | DFW',
  description: 'Professional carpet cleaning, water damage restoration, specialty floor care and builder support across Dallas-Fort Worth and North Texas.',
  keywords: ['Dallas Fort Worth carpet cleaning', 'DFW water damage restoration', 'builder warranty restoration DFW', 'North Texas carpet cleaning', 'DFW water extraction'],
  openGraph: {
    title: 'Mitchell Carpet Cleaning & Restoration | DFW',
    description: 'Cleaner spaces. Stronger tomorrows. Professional restoration support across North Texas.',
    type: 'website',
  },
}

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
