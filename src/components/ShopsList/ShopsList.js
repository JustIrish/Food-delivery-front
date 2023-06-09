import ShopsListItem from './ShopsListItem';

import { List } from './ShopsList.styled';

const ShopsList = ({ shopsArr, onClick, selectedShop }) => {
  return (
    <List>
      {shopsArr.map(({ _id, ...props }) => (
        <ShopsListItem
          key={_id}
          {...props}
          onClick={onClick}
          selectedShop={selectedShop}
        />
      ))}
    </List>
  );
};

export default ShopsList;
