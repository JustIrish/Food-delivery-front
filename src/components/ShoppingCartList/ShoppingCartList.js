import { useState, useEffect } from 'react';
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from 'services/localStorage';
import ShoppingCartItem from './ShoppingCartItem';

import { List } from './ShoppingCartList.styled';

const ShoppingCartList = ({ getData }) => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const order = loadFromLocalStorage('order') || [];
    setOrder(order);
  }, []);

  useEffect(() => {
    const total = order
      .reduce((acc, item) => item.price * item.quantity + acc, 0)
      .toFixed(2);

    getData(total);
  }, [order, getData]);

  const handleIncrement = id => {
    order.map(item => id === item.id && (item.quantity = item.quantity + 1));

    saveToLocalStorage('order', [...order]);
    setOrder(loadFromLocalStorage('order'));
  };

  const handleDecrement = id => {
    order.map(item => id === item.id && (item.quantity = item.quantity - 1));

    saveToLocalStorage('order', [...order]);
    setOrder(loadFromLocalStorage('order'));
  };

  const handleRemoveProduct = id => {
    const filteredOrder = order.filter(item => item.id !== id);

    saveToLocalStorage('order', filteredOrder);
    setOrder(filteredOrder);
  };

  return (
    <>
      <List>
        {order.map(({ id, ...props }) => (
          <ShoppingCartItem
            key={id}
            id={id}
            onRemove={handleRemoveProduct}
            onIncr={handleIncrement}
            onDecr={handleDecrement}
            {...props}
          />
        ))}
      </List>
    </>
  );
};

export default ShoppingCartList;
