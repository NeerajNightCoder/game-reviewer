import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';
import { Genre } from './useGenres';
import { GameQuery } from '../App';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface SortOrder {
  value: string;
  label: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = ({ genre, platform, sortOrder, searchText }: GameQuery) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  console.log(searchText);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGamesResponse>('/games', {
        signal: controller.signal,
        params: {
          genres: genre?.id,
          platforms: platform?.id,
          ordering: sortOrder?.value,
          search: searchText,
        },
      })
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, [genre?.id, platform?.id, sortOrder?.value, searchText]);

  return { games, error, isLoading };
};

export default useGames;
