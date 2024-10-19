import {
  Box,
  Button,
  Heading,
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
    <Box padding={10}>
      <Heading fontSize={'2xl'} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
          <ListItem marginY={2} key={genre.id}>
            <HStack>
              <Image
                boxSize={'32px'}
                objectFit={'cover'}
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius={8}
              />
              <Button
                whiteSpace={'normal'}
                textAlign={'left'}
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
    </Box>
  );
};

export default GenreList;
