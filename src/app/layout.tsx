import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Football Challenge</title>
      </head>
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">Football Challenge</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="ml-4 mt-8">
          {children}
        </main>
      </body>
    </html>
  );
}
