// import { useState } from 'react';
import { Formik } from 'formik';

import { schema } from 'common/validationSchema';

import {
  FormStyled,
  LabelStyled,
  InputStyled,
  BtnStyled,
} from './ContactsForm.styled';

const ContactsForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);

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
        </LabelStyled>

        <LabelStyled>
          Email:
          <InputStyled type="email" name="email" />
        </LabelStyled>

        <LabelStyled>
          Phone:
          <InputStyled type="tel" name="phone" />
        </LabelStyled>

        <LabelStyled>
          Address:
          <InputStyled type="text" name="address" />
        </LabelStyled>
        <BtnStyled type="submit">Send order</BtnStyled>
      </FormStyled>
    </Formik>
  );
};

export default ContactsForm;
