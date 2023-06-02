import { List } from './ProductsList.styled';

import ProductsListItem from './ProductsListItem';

const ProductsList = ({ productsArr }) => {
  return (
    <List>
      {productsArr.map(({ _id, ...props }) => (
        <ProductsListItem key={_id} {...props} />
      ))}
    </List>
  );
};

export default ProductsList;
