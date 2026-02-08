'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useFavorites } from '@/context/FavoritesContext';

export default function Navbar() {
  const pathname = usePathname();
  const { favorites } = useFavorites();

  return (
    <nav className="bg-black/90 text-white sticky top-0 z-50 border-b border-gray-800 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary tracking-tighter">
          MOVIEAPP
        </Link>

        <div className="flex items-center gap-6">
          <Link 
            href="/" 
            className={`hover:text-primary transition-colors ${pathname === '/' ? 'text-white' : 'text-gray-400'}`}
          >
            Home
          </Link>
          
          <Link 
            href="/favorites" 
            className={`relative hover:text-primary transition-colors ${pathname === '/favorites' ? 'text-white' : 'text-gray-400'}`}
          >
            Favorites
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {favorites.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}