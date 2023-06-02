import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 24px;
`;

export const StyledLink = styled(NavLink)`
  min-width: 150px;
  text-align: center;
  padding: 8px 16px;
  border-radius: 4px;
  color: #dde4e4;
  font-weight: 500;
  background-color: #153c3c;

  transition: background-color 500ms cubic-bezier(0.165, 0.84, 0.44, 1);

  &.active {
    color: #ffffff;
    background-color: #84a17d;
  }

  :hover:not(&.active) {
    background-color: #ebd8ff33;
  }
`;
