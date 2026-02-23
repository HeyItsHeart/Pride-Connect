import "../styles/globals.css";

export const metadata = {
  title: "PrideConnect+",
  description: "Clean Modern LGBTQ+ Social & Dating App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-500">PrideConnect+</h1>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
