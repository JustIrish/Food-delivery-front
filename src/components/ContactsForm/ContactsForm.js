// import { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';

import { schema } from 'common/validationSchema';

import {
  FormStyled,
  LabelStyled,
  InputStyled,
  BtnStyled,
} from './ContactsForm.styled';

const ContactsForm = ({ totalData }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values, totalData);

    resetForm();
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
        <div>Total cost: {totalData}</div>
        <BtnStyled type="submit">Send order</BtnStyled>
      </FormStyled>
    </Formik>
  );
};

export default ContactsForm;
