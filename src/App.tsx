import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Button, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform, SortOrder } from './hooks/useGames';
import SortSelector from './components/SortSelector';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: SortOrder;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      {/* <GridItem area="navv">Navv</GridItem> */}
      <Show above="lg">
        <GridItem area="aside">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} paddingLeft={2} marginBottom={2}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            onSelectSortOrder={(sortOrder: SortOrder) => {
              setGameQuery({ ...gameQuery, sortOrder });
            }}
            sortOrder={gameQuery.sortOrder}
          />
        </HStack>
        <GameGrid
          genre={gameQuery.genre}
          platform={gameQuery.platform}
          sortOrder={gameQuery.sortOrder}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
