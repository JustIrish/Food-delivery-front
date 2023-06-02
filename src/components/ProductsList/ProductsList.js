import ProductsListItem from './ProductsListItem';

const ProductsList = ({ productsArr }) => {
  return (
    <ul>
      {productsArr.map(({ _id, ...props }) => (
        <ProductsListItem key={_id} {...props} />
      ))}
    </ul>
  );
};

export default ProductsList;
