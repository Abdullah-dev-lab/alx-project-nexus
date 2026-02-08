import SkeletonCard from '@/components/SkeletonCard';

export default function Loading() {
  return (
    <main className="min-h-screen bg-dark px-4 py-8 md:px-8 lg:px-16">
      {/* Header Skeleton */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <div className="h-10 bg-gray-800 rounded w-64 animate-pulse" />
        <div className="h-12 bg-gray-800 rounded-full w-full max-w-md animate-pulse" />
      </div>

      {/* Grid of Skeletons */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  );
}