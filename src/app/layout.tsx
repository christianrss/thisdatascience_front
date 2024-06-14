import Link from "next/link"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ThisDataScience",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <header id="topo">
          <div className="row">
              <div className="descricao">
                  <h1>ThisDataScience</h1>
                  <h2>Conteúdo sobre ciência de dados</h2>
              </div>
          </div>
          <nav>
              <ul>
                  <Link href="/">
                      <li>
                          Inicio
                      </li>
                  </Link>
              </ul>
          </nav>
        </header>
        {children}

      </body>
    </html>
  );
}
