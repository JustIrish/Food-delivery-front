import ShopsListItem from './ShopsListItem';

import { List } from './ShopsList.styled';

const ShopsList = ({ shopsArr, onClick }) => {
  return (
    <List>
      {shopsArr.map(({ _id, ...props }) => (
        <ShopsListItem key={_id} {...props} onClick={onClick} />
      ))}
    </List>
  );
};

export default ShopsList;
