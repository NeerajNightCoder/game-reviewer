import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-urls";

const GenreList = () => {
  const { genres, isLoading, error } = useGenres();
  if(isLoading) return <Spinner />
  if (error) return null
  return (
    <>
      <h1>GenreList</h1>
      <List>
        {genres.map((genre) => (
            <ListItem marginY={2}>
                <HStack>
                    <Image boxSize={'32px'} src={getCroppedImageUrl(genre.image_background)} borderRadius={8}/>
                    <Text>{genre.name}</Text>
                </HStack>
            </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
