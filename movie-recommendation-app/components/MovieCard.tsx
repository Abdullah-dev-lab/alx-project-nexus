'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Movie } from '@/types/movie';
import { FaStar, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useFavorites } from '@/context/FavoritesContext';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
    const { isFavorite, addFavorite, removeFavorite } = useFavorites();
    const favorite = isFavorite(movie.id);

    const toggleFavorite = (e: React.MouseEvent) => {
      e.preventDefault();
      if (favorite) {
        removeFavorite(movie.id);
      } else {
        addFavorite(movie);
      }
    };

    const imageUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/placeholder-movie.png'; 

  return (
    <div className="group relative bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
      <Link href={`/movie/${movie.id}`}>
        <div className="relative aspect-[2/3] w-full">
          <Image 
            src={imageUrl} 
            alt={movie.title} 
            fill 
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          <button
            onClick={toggleFavorite}
            className="absolute top-2 right-2 z-20 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
          >
            {favorite ? (
              <FaHeart className="text-red-500 text-xl" />
            ) : (
              <FaRegHeart className="text-white text-xl" />
            )}
          </button>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-semibold border border-white px-4 py-2 rounded-full">
              View Details
            </span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-white text-lg font-bold truncate mb-1">
            {movie.title}
          </h3>
          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>{new Date(movie.release_date).getFullYear()}</span>
            <div className="flex items-center gap-1 text-yellow-400">
              <FaStar />
              <span>{movie.vote_average.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;