import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to your budget",
  description: "List of all the spendings",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
