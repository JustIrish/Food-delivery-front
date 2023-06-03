import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  width: 400px;
  border: 1px solid #84a17d;
  border-radius: 8px;
`;

export const LabelStyled = styled.label`
  font-size: 14px;
`;

export const InputStyled = styled(Field)`
  width: 100%;
  padding: 12px 8px;
  border-radius: 8px;
  border: 1px solid #84a17d;

  &:focus,
  &:hover,
  &:active {
    border: 1px solid #416262;
  }
`;

export const BtnStyled = styled.button`
  min-width: 150px;
  text-align: center;
  padding: 14px 16px;
  border: transparent;
  border-radius: 8px;
  color: #dde4e4;
  font-weight: 500;
  background-color: #416262;
  cursor: pointer;

  transition: background-color 500ms cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    background-color: #153c3c;
  }
`;
