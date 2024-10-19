import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { Genre } from '../hooks/useGenres';
import { GameQuery } from '../App';

const GameGrid = ({ genre, platform, sortOrder, searchText }: GameQuery) => {
  const { games, error, isLoading } = useGames({
    genre,
    platform,
    sortOrder,
    searchText,
  } as GameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2, xl: 3, '2xl': 4 }}
        spacing={10}
        padding={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.length === 0 && !isLoading && (
          <Text>
            No {genre?.name} Games for {platform?.name}
          </Text>
        )}
        {games
          .filter((game) => game.background_image)
          .map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
