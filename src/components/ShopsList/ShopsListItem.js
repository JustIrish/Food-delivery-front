import { ListItem, Text } from './ShopsList.styled';

const ShopsListItem = ({ name, products, onClick }) => {
  return (
    <ListItem
      onClick={() => {
        onClick(name, products);
      }}
    >
      <Text> {name}</Text>
    </ListItem>
  );
};

export default ShopsListItem;
