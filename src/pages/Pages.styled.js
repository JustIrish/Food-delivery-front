import styled from 'styled-components';

export const Wrapper = styled.div`
padding: 100px 16px;
  display: flex;
  align-items: flex-start;
  gap: 50px;
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
