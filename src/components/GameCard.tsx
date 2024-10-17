import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../services/image-urls"

interface Props {
    game: Game
}


const GameCard = ({ game }: Props) => {
    return (
        <Card width={'300px'} height={'400px'}  borderRadius={10} overflow={'hidden'}>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <Heading fontSize={'2xl'}>{game.name}</Heading>
                <HStack justifyContent={'space-between'}> 
                    <PlatformIconList parent_platforms={game.parent_platforms} />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard