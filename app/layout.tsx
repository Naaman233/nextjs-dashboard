import '@/app/ui/global.css'
import { inter, roboto_mono } from '@/app/ui/font'
import { Metadata } from 'next'

export const metadata : Metadata = {
  title : 'Acme Dashboard',
  description: 'The official Dashboard for Acme',
  metadataBase: new URL('')
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto_mono.className} antialiased`}>{children}</body>
    </html>
  );
}
