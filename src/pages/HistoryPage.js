import { useState } from 'react';
import { toast } from 'react-hot-toast';

import HistoryForm from 'components/HistoryForm/HistoryForm';
import HistoryList from 'components/HisturyList/HistoryList';

import { Wrapper, HistoryWrap, Title } from './Pages.styled';

import { fetchOrderHistory } from 'services/API/api';

const HistoryPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [orderHistory, setOrderHistory] = useState([]);

  const handleSubmit = async (email, phone) => {
    setIsLoading(true);

    const obj = { email, phone };

    try {
      const data = await fetchOrderHistory(obj);
      console.log(data);
      toast.success('Your order history!');
      setOrderHistory(data);
    } catch (error) {
      console.error(error);
      toast.error('Orders not found...');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <HistoryForm onSubmit={handleSubmit} />
      {orderHistory.length > 0 && (
        <HistoryWrap>
          <Title>Order History</Title>
          <HistoryList ordersArr={orderHistory} />
        </HistoryWrap>
      )}
    </Wrapper>
  );
};

export default HistoryPage;
