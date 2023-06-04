import {
  ListItem,
  OrderTitle,
  ProductWrap,
  Image,
  DescWrap,
} from './HistoryList.styled';

const HistoryListItem = ({ items, totalCost, createdAt }) => {
  return (
    <ListItem>
      <OrderTitle>
        <p>Total Cost: {totalCost}</p>
        <p>
          Order Date:{' '}
          {createdAt.toString().slice(0, 10).split('-').reverse().join('.')}
        </p>
      </OrderTitle>

      {items.map(product => (
        <ProductWrap>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width="100"
            loading="lazy"
          />
          <DescWrap>
            <p> {product.name}</p>
            <p>Price: {product.price} $</p>
            <p>Quantity: {product.quantity}</p>
          </DescWrap>
        </ProductWrap>
      ))}
    </ListItem>
  );
};

export default HistoryListItem;
