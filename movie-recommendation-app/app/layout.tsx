import './globals.css'; 
import { FavoritesProvider } from "@/context/FavoritesContext";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <FavoritesProvider>
          <Navbar /> 
          {children}
        </FavoritesProvider>
      </body>
    </html>
  );
}