import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameCardSkeleton = () => {
  return (
    <Card width={'300px'} height={'400px'} borderRadius={10} overflow="hidden">
      <Skeleton height={'200px'} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};
export default GameCardSkeleton;
