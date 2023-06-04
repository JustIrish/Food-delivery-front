import { Nav, LinkWrap, StyledLink } from './NavBar.styled';

const NavBar = () => {
  return (
    <Nav>
      <LinkWrap>
        <StyledLink to="/">FOOD delivery</StyledLink>
        <StyledLink to="/shops">Shops</StyledLink>
      </LinkWrap>
      <LinkWrap>
        <StyledLink to="/shopping">Shopping Cart</StyledLink>
        <StyledLink to="/history">Order history</StyledLink>
      </LinkWrap>
    </Nav>
  );
};

export default NavBar;
