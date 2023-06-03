import ContactsForm from 'components/ContactsForm/ContactsForm';
import ShoppingCartList from 'components/ShoppingCartList/ShoppingCartList';
import { useState } from 'react';

import { Wrapper } from './ShopsPage.styled';

const ShoppingCartPage = () => {
  const [total, setTotal] = useState(null);

  const getTotalCosts = total => {
    setTotal(total);
  };

  return (
    <Wrapper>
      <ContactsForm totalData={total} />
      <ShoppingCartList getData={getTotalCosts} />
    </Wrapper>
  );
};

export default ShoppingCartPage;
