import Image from 'next/image';
import Link from 'next/link';
import { getMovieDetails } from '@/lib/api';
import { FaStar, FaClock, FaCalendarAlt, FaArrowLeft } from 'react-icons/fa';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function MovieDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const movie = await getMovieDetails(id);

  if (!movie) {
    return (
      <div className="min-h-screen bg-dark text-white flex items-center justify-center">
        <h2 className="text-2xl">Movie not found</h2>
        <Link href="/" className="text-primary ml-4 hover:underline">
          Go Home
        </Link>
      </div>
    );
  }

  // Format hours and minutes
  const hours = Math.floor((movie.runtime || 0) / 60);
  const minutes = (movie.runtime || 0) % 60;

  return (
    <main className="min-h-screen bg-dark text-white">
      <div className="relative h-[70vh] w-full">
        <div className="absolute inset-0">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            fill
            className="object-cover opacity-50"
            priority
          />
          {/* Gradient Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col md:flex-row items-end pb-12 gap-8">
          <div className="hidden md:block w-64 flex-shrink-0 rounded-lg overflow-hidden shadow-2xl border-4 border-gray-800">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={300}
              height={450}
              className="object-cover"
            />
          </div>

          <div className="flex-1 space-y-4">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-gray-300 hover:text-primary transition-colors mb-4"
            >
              <FaArrowLeft /> Back to Browse
            </Link>

            <h1 className="text-4xl md:text-6xl font-bold">{movie.title}</h1>
            
            {movie.tagline && (
              <p className="text-xl text-gray-400 italic">"{movie.tagline}"</p>
            )}

            {/* Metadata Row */}
            <div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-gray-300">
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                <span className="text-white font-bold">{movie.vote_average.toFixed(1)}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock />
                <span>{hours}h {minutes}m</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt />
                <span>{new Date(movie.release_date).getFullYear()}</span>
              </div>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-2">
              {movie.genres?.map((genre) => (
                <span 
                  key={genre.id} 
                  className="px-3 py-1 bg-gray-800 rounded-full text-sm border border-gray-700"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            {/* Overview */}
            <div className="max-w-2xl mt-6">
              <h3 className="text-xl font-semibold mb-2 text-primary">Overview</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {movie.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}