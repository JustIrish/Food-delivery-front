import { List } from './HistoryList.styled';
import HistoryListItem from './HistoryListItem';

const HistoryList = ({ ordersArr }) => {
  return (
    <List>
      {ordersArr.map(({ _id, ...props }) => (
        <HistoryListItem key={_id} {...props} />
      ))}
    </List>
  );
};

export default HistoryList;
