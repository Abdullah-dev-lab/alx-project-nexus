'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center text-white px-4">
      <h2 className="text-3xl font-bold mb-4 text-red-500">Something went wrong!</h2>
      <p className="text-gray-400 mb-8 text-center max-w-md">
        We couldn't load the movies. Please try again later.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-primary rounded-full font-semibold hover:bg-red-700 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}