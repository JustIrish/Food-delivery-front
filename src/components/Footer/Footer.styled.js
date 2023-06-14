import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #153c3c;
  color: #dde4e4;
  z-index: 1;
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: end;
  color: #dde4e4;
`;

export const ContactLinkList = styled.ul`
  display: flex;
  gap: 24px;
`;

export const Link = styled.a`
  color: #dde4e4;
  :hover,
  :focus {
    color: #ffffff;
  }
`;
