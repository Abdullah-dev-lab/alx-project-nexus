import { getTrendingMovies, searchMovies } from '@/lib/api';
import MovieCard from '@/components/MovieCard';
import SearchBar from '@/components/SearchBar';

interface HomeProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Home({ searchParams }: HomeProps) {
  const resolvedParams = await searchParams; 
  const query = resolvedParams?.query;

  const movies = typeof query === 'string' 
    ? await searchMovies(query) 
    : await getTrendingMovies();

  return (
    <main className="min-h-screen bg-dark px-4 py-8 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <h1 className="text-3xl font-bold text-white md:text-4xl">
          {query ? `Results for "${query}"` : 'Trending Now'}
        </h1>
        <SearchBar />
      </div>

      {/* Grid of Movies */}
      {movies.length > 0 ? (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400 mt-12">
          <p className="text-xl text-white">No movies found.</p>
        </div>
      )}
    </main>
  );
}