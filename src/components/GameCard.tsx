import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-urls';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card
      width={'300px'}
      height={'400px'}
      borderRadius={10}
      overflow={'hidden'}
      display={'flex'}
      flexDirection={'column'}
    >
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody flex={1} display={'flex'} flexDirection={'column'}>
        <VStack justifyContent={'space-between'} overflow={'hidden'} flex={1}>
          <Heading fontSize={'2xl'}>{game.name}</Heading>
          <HStack justifyContent={'space-between'} width={'full'}>
            <PlatformIconList parent_platforms={game.parent_platforms} />
            <CriticScore score={game.metacritic} />
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
