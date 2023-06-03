// import { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
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

const ContactsForm = ({ totalCost }) => {
  const handleSubmit = ({ userName, email, phone, address }, { resetForm }) => {
    const data = loadFromLocalStorage('order');

    const order = {
      name: userName,
      email,
      phone,
      address,
      totalCost,
      items: data,
    };
    createOrder(order);

    resetForm();
    removeFromLocalStorage('order');
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
        <BtnStyled type="submit">Send order</BtnStyled>
      </FormStyled>
    </Formik>
  );
};

export default ContactsForm;
