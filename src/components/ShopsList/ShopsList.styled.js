import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ListItem = styled.li`
  min-width: 300px;
  padding: 50px;
  text-align: center;
  cursor: pointer;
  background-color: #f3f7f2;
  border: 1px solid #153c3c;
  border-radius: 8px;

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  scale: 1;
  transition: scale 500ms cubic-bezier(0.165, 0.84, 0.44, 1),
    box-shadow 500ms cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    scale: 1.02;
    box-shadow: 0 0 7px 2px #a8a6a5;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #153c3c;
`;
