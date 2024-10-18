import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-urls';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { genres, isLoading, error } = useGenres();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <List padding={10}>
        {genres.map((genre) => (
          <ListItem marginY={2} key={genre.id}>
            <HStack>
              <Image
                boxSize={'32px'}
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius={8}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                fontWeight={selectedGenre?.id == genre.id ? 'bold' : 'normal'}
                fontSize={selectedGenre?.id == genre.id ? '2xl' : 'xl'}
                variant={'link'}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
