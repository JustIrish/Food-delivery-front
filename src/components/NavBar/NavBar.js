import { Nav, StyledLink } from './NavBar.styled';

const NavBar = () => {
  return (
    <Nav>
      <StyledLink to="/">FOOD delivery</StyledLink>
      <StyledLink to="/shops">Shops</StyledLink>
      <StyledLink to="/shopping">Shopping Cart</StyledLink>
      <StyledLink to="/history">Order history</StyledLink>
    </Nav>
  );
};

export default NavBar;
