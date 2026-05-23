import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RxRemind – Smart Prescription Refill Reminders",
  description: "Tracks prescription schedules, sends refill reminders, and integrates with major pharmacy chains for easy reordering."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="edfc0a8c-558b-4563-abb8-edc2ed710177"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
