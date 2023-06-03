import { useState, useEffect } from 'react';
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from 'services/localStorage';
import ShoppingCartItem from './ShoppingCartItem';

import { List } from './ShoppingCartList.styled';

const ShoppingCartList = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const order = loadFromLocalStorage('order') || [];
    setOrder(order);
  }, []);

  return (
    <List>
      {order.map(({ id, ...props }) => (
        <ShoppingCartItem key={id} {...props} />
      ))}
    </List>
  );
};

export default ShoppingCartList;
