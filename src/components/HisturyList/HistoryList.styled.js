import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 90%;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 20px;
  background-color: #f3f7f2;
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
`;

export const OrderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: #153c3c;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.24px;
`;

export const ProductWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

export const DescWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #153c3c;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.24px;
`;
