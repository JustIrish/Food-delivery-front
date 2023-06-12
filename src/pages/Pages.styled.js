import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  padding: 100px 16px;
  display: flex;
  align-items: flex-start;
  gap: 50px;
`;

export const HomeTextWrap = styled.div`
  width: 800px;
  height: 40vh;
  padding: 100px 150px 24px 50px;
  background-color: #f3f7f2;
  border-bottom-right-radius: 70%;
  border-top-left-radius: 30%;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const HistoryWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  gap: 20px;
  height: 77vh;
  overflow: auto;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: #172426;
`;

export const Text = styled.p`
  margin-top: 25px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  color: #172426;
`;

export const Link = styled(NavLink)`
  color: #373737;
  text-decoration-line: underline;
  :hover,
  :focus {
    font-weight: 700;
  }
`;
