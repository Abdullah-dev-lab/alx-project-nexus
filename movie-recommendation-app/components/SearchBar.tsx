'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [term, setTerm] = useState(searchParams.get('query') || '');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (term.trim()) {
      router.push(`/?query=${encodeURIComponent(term)}`);
    } else {
      router.push('/');
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-md relative flex items-center">
      <FaSearch className="absolute left-4 text-gray-400 z-10" />
      <input
        type="text"
        placeholder="Search for movies..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        className="w-full bg-gray-800 text-black pl-12 pr-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-lg"
      />
    </form>
  );
}