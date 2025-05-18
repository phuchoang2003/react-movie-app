import type { MovieResponse } from "../types/movie";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const movieService = {
  async searchMovies(query: string, page: number = 1): Promise<MovieResponse> {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}&page=${page}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    return response.json();
  },

  async getPopularMovies(page: number = 1): Promise<MovieResponse> {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch popular movies");
    }

    return response.json();
  },
};
