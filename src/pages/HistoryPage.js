import { useState } from 'react';
import { toast } from 'react-hot-toast';
import HistoryForm from 'components/HistoryForm/HistoryForm';

import { fetchOrderHistory } from 'services/API/api';

const HistoryPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (email, phone) => {
    setIsLoading(true);

    const obj = { email, phone };
    console.log(obj);
    try {
      await fetchOrderHistory(obj);
      toast.success('Your order history!');
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong...');
    } finally {
      setIsLoading(false);
    }
  };

  return <HistoryForm onSubmit={handleSubmit} />;
};

export default HistoryPage;
