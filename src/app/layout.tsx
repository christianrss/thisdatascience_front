import Link from "next/link"
import type { Metadata, ResolvingMetadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

type Props = {
  params: { title: string }
}

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(
  { params }:Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: {
      template: `%s | ThisDataScience`,
      default: "ThisDataScience"
    },
    description: "",
  }
}
/*
export const metadata: Metadata = {
  title: {
    template: "%s | ThisDataScience",
    default: "ThisDataScience"
  },
  description: "",
};*/

export default function RootLayout({
  children
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
        <footer>
          &copy; ThisDataScience. All rights reserved.
        </footer>

      </body>
    </html>
  );
}
