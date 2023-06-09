import { ListItem, Text } from './ShopsList.styled';

const ShopsListItem = ({ name, products, onClick, selectedShop }) => {
  return (
    <ListItem
      style={{
        backgroundColor: selectedShop === name ? '#ADC9A6' : '#f3f7f2',
      }}
      onClick={() => {
        onClick(name, products);
      }}
    >
      <Text
        style={{
          color: selectedShop === name ? '#ffffff' : '#153c3c',
        }}
      >
        {' '}
        {name}
      </Text>
    </ListItem>
  );
};

export default ShopsListItem;
