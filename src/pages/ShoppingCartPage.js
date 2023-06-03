import ContactsForm from 'components/ContactsForm/ContactsForm';
import ShoppingCartList from 'components/ShoppingCartList/ShoppingCartList';

import { Wrapper } from './ShopsPage.styled';

const ShoppingCartPage = () => {
  return (
    <Wrapper>
      <ContactsForm />
      <ShoppingCartList />
    </Wrapper>
  );
};

export default ShoppingCartPage;
