import { ListItem } from './ShoppingCartList.styled';

const ShoppingCartItem = ({
  shopName,
  id,
  name,
  imageUrl,
  price,
  description,
}) => {
  return (
    <ListItem>
      <p> {shopName}</p>
      <p> {name}</p>
      <p> {price}</p>
      <p> {description}</p>
    </ListItem>
  );
};

export default ShoppingCartItem;
