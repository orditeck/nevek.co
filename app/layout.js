import './globals.css'

export const metadata = {
  title: 'Keven | Senior Web Developer',
  description: 'Senior Web Developer with 15+ years of experience',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
