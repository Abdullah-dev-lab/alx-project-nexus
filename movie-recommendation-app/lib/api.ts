import axios from 'axios';
import { Movie, MovieResponse } from '@/types/movie';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getTrendingMovies = async (): Promise<Movie[]> => {
  try {
    const response = await api.get<MovieResponse>('/trending/movie/week');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

export const getTopRatedMovies = async (): Promise<Movie[]> => {
  try {
    const response = await api.get<MovieResponse>('/movie/top_rated');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching top rated movies:', error);
    return [];
  }
};

export const getMovieDetails = async (id: string): Promise<Movie | null> => {
  try {
    const response = await api.get(`/movie/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching movie details for id ${id}:`, error);
    return null;
  }
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  try {
    const response = await api.get<MovieResponse>('/search/movie', {
      params: { query },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

// 