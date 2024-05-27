"use client"

import "@/app/globals.css";
import "@/app/styles/all.css";
import Footer from "@/components/(landingpage)/footer";
import Header from "@/components/(landingpage)/header";
import Manutencao from "./manutenção/page";
import { usePathname } from "next/navigation";
import { metadata } from "./metadata";



export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';
  const isHomePage = pathname === "/"; 
 
  console.log('Maintenance Mode:', process.env.NEXT_PUBLIC_MAINTENANCE_MODE);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}></meta>
        <meta name="keywords" content={metadata.keywords}></meta>
        <meta property="og:title" content={metadata.openGraph.title}></meta>
        <meta property="og:description" content={metadata.openGraph.description}></meta>
        <meta property="og:type" content={metadata.openGraph.type}></meta>
        <meta property="og:url" content={metadata.openGraph.url}></meta>
        {metadata.openGraph.images.map((image, index) => (
          <meta key={index} property="og:image" content={image}></meta>
        ))}
      </head>
      <body>
      {isMaintenanceMode && isHomePage ? (
          <Manutencao />
        ) : (
          <>
            <Header />
            {children}
            <Footer />
          </>
        )}
        </body>
    </html>
  );
}

console.log(metadata.title);