import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Weather App",
  description: "Weather Forecasting App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
