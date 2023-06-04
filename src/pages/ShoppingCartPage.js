import ContactsForm from 'components/ContactsForm/ContactsForm';
import ShoppingCartList from 'components/ShoppingCartList/ShoppingCartList';
import { useState } from 'react';

import { Wrapper } from './Pages.styled';

const ShoppingCartPage = () => {
  const [total, setTotal] = useState(null);

  const getTotalCosts = total => {
    setTotal(total);
  };

  return (
    <Wrapper>
      <ContactsForm totalCost={total} />
      <ShoppingCartList getData={getTotalCosts} />
    </Wrapper>
  );
};

export default ShoppingCartPage;
