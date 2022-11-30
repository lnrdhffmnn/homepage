import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head />
      <body>
        <main className="w-screen h-screen flex items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
