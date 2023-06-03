import { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { toast } from 'react-hot-toast';
import { createOrder } from 'services/API/api';

import {
  loadFromLocalStorage,
  removeFromLocalStorage,
} from 'services/localStorage';
import { schema } from 'common/validationSchema';

import {
  FormStyled,
  LabelStyled,
  InputStyled,
  BtnStyled,
} from './ContactsForm.styled';
import { Loader } from 'components/Loader/Loader';

const ContactsForm = ({ totalCost }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (
    { userName, email, phone, address },
    { resetForm }
  ) => {
    setIsLoading(true);
    const data = loadFromLocalStorage('order');

    const order = {
      name: userName,
      email,
      phone,
      address,
      totalCost,
      items: data,
    };

    try {
      await createOrder(order);
      toast.success('All right, your order has been shipped!');
      resetForm();
      removeFromLocalStorage('order');
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong...');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{ userName: '', email: '', phone: '', address: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormStyled autoComplete="off">
        <LabelStyled>
          Name:
          <InputStyled type="text" name="userName" />
          <ErrorMessage name="userName" />
        </LabelStyled>

        <LabelStyled>
          Email:
          <InputStyled type="email" name="email" />
          <ErrorMessage name="email" />
        </LabelStyled>

        <LabelStyled>
          Phone:
          <InputStyled type="tel" name="phone" />
          <ErrorMessage name="phone" />
        </LabelStyled>

        <LabelStyled>
          Address:
          <InputStyled type="text" name="address" />
          <ErrorMessage name="address" />
        </LabelStyled>
        <div>Total cost: {totalCost}</div>
        <BtnStyled type="submit">
          {isLoading ? <Loader /> : 'Send order'}
        </BtnStyled>
      </FormStyled>
    </Formik>
  );
};

export default ContactsForm;
