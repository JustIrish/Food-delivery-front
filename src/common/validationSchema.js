import * as yup from 'yup';

const namePattern =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const phonePattern =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}?$/;

const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const addressPattern = /\d{1,5}\s\w. \s(\b\w*\b\s){1,2}\w*\./;

export const schema = yup.object().shape({
  userName: yup
    .string()
    .min(2)
    .matches(namePattern, 'invalid name format')
    .required(),
  email: yup.string().matches(emailPattern, 'invalid email format').required(),
  phone: yup
    .string()
    .min(7)
    .max(10)
    .matches(phonePattern, 'invalid phone number format')
    .required(),
  address: yup
    .string()
    .matches(addressPattern, 'invalid address format')
    .required(),
});
