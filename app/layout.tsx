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
      <head>
        <title>Next.js</title>
      </head>

      <body className={`${inter.className} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
