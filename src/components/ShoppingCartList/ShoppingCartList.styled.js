import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 20px;
  background-color: #f3f7f2;
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
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

export const ActivityWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const QuantityWrap = styled.p`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  background-color: #fff;
  border-radius: 8px;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: transparent;
  padding: 8px;
  cursor: pointer;

  scale: 1;
  transition: scale 500ms cubic-bezier(0.165, 0.84, 0.44, 1);

  &:active {
    scale: 0.8;
  }
`;

export const BtnWrap = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
