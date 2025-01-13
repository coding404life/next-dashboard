import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
