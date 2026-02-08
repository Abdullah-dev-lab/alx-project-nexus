export default function SkeletonCard() {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden animate-pulse">
      {/* Poster Placeholder */}
      <div className="aspect-[2/3] w-full bg-gray-700" />
      
      {/* Content Placeholder */}
      <div className="p-4 space-y-3">
        {/* Title line */}
        <div className="h-6 bg-gray-700 rounded w-3/4" />
        
        {/* Date and Rating line */}
        <div className="flex justify-between items-center">
          <div className="h-4 bg-gray-700 rounded w-1/3" />
          <div className="h-4 bg-gray-700 rounded w-1/4" />
        </div>
      </div>
    </div>
  );
}