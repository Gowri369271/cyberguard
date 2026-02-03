import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CyberGuard Sandbox",
  description: "Real-time Vulnerability Simulation Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30`}>
        {children}
      </body>
    </html>
  );
}
