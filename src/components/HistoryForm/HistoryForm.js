import { Formik, ErrorMessage } from 'formik';
// import { Loader } from 'components/Loader/Loader';
import {
  FormStyled,
  LabelStyled,
  InputStyled,
  BtnStyled,
} from '../ContactsForm/ContactsForm.styled';

import { historySchema } from 'common/validationSchema';

const HistoryForm = ({ onSubmit }) => {
  const handleSubmit = ({ email, phone }, { resetForm }) => {
    onSubmit(email, phone);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', phone: '' }}
      validationSchema={historySchema}
      onSubmit={handleSubmit}
    >
      <FormStyled autoComplete="off">
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

        <BtnStyled type="submit">Get order history</BtnStyled>
      </FormStyled>
    </Formik>
  );
};

export default HistoryForm;
