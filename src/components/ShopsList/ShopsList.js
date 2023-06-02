import ShopsListItem from './ShopsListItem';

const ShopsList = ({ shopsArr, onClick }) => {
  return (
    <ul>
      {shopsArr.map(({ _id, ...props }) => (
        <ShopsListItem key={_id} {...props} onClick={onClick} />
      ))}
    </ul>
  );
};

export default ShopsList;
