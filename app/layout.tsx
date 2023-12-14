import '@/app/ui/global.css'
import { inter, roboto_mono } from '@/app/ui/font'
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
