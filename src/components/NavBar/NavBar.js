import { Nav, StyledLink } from './NavBar.styled';

const NavBar = () => {
  return (
    <Nav>
      <StyledLink to="/">FOOD delivery</StyledLink>
      <StyledLink to="/shops">Shops</StyledLink>
      <StyledLink to="/shopping">Shopping Cart</StyledLink>
    </Nav>
  );
};

export default NavBar;
