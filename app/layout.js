import './globals.css'

export const metadata = {
  title: 'Keven Lefebvre',
  description: 'Senior Web Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
