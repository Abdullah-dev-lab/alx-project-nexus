'use client';

import { useFavorites } from '@/context/FavoritesContext';
import MovieCard from '@/components/MovieCard';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-dark flex flex-col items-center justify-center text-white px-4">
        <h2 className="text-3xl font-bold mb-4">No Favorites Yet</h2>
        <p className="text-gray-400 mb-8 text-center max-w-md">
          Start exploring and heart your favorite movies to see them here!
        </p>
        <Link 
          href="/" 
          className="px-6 py-3 bg-primary rounded-full font-semibold hover:bg-red-700 transition-colors"
        >
          Browse Movies
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-dark px-4 py-8 md:px-8 lg:px-16">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white md:text-4xl">
          My Favorites
        </h1>
        <Link href="/" className="text-gray-400 hover:text-white transition-colors">
          &larr; Back to Home
        </Link>
      </header>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}