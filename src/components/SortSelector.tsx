import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import { Platform, SortOrder } from '../hooks/useGames';

interface Props {
  onSelectSortOrder: (sortOrder: SortOrder) => void;
  sortOrder: SortOrder;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date Added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release Date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Avg Ratings' },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {sortOrder?.label || 'Order By: Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.label}
            onClick={() => onSelectSortOrder(order)}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
