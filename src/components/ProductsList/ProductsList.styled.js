import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ProductsItem = styled.li`
  position: relative;
  max-width: 100%;
  width: calc((100% - 32px) / 2);
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Image = styled.img`
  width: 100%;
  height: 323px;
  object-fit: cover;
  border-radius: 8px;
`;

export const Text = styled.p`
  position: absolute;
  top: 26px;
  left: 26px;
  padding: 8px;
  font-weight: 600;
  font-size: 25px;
  color: #153c3c;
  background-color: #f3f7f2;
  border-radius: 8px;
`;

export const TitleWrap = styled.div`
  position: absolute;
  left: 50%;
  bottom: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateX(-50%);
  width: 90%;
  padding: 16px;
  background-color: #f3f7f2;
  color: #153c3c;
  border-radius: 8px;

  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: -0.24px;
`;

export const BasketBtn = styled.button`
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
