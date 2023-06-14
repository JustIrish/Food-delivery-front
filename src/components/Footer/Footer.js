import { BsGithub, BsLinkedin, BsTelegram } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

import {
  FooterWrapper,
  ContactList,
  ContactLinkList,
  Link,
} from './Footer.styled';

const Footer = () => {
  const name = 'Iryna Babych';
  const email = 'babich.iren.201@gmail.com';
  const githubLink = 'https://github.com/JustIrish';
  const linkedinLink = 'https://www.linkedin.com/in/iryna-babich';
  const telegramLink = 'https://t.me/BabychRisha';
  return (
    <FooterWrapper>
      <ContactList>
        <li>© 2023 {name}</li>
        <li>
          <FiMail /> <Link href={`mailto:${email}`}>{email}</Link>
        </li>
      </ContactList>
      <ContactLinkList>
        <li>
          <Link href={githubLink} target="_blank">
            <BsGithub size={28} />
          </Link>
        </li>
        <li>
          <Link href={linkedinLink} target="_blank">
            <BsLinkedin size={28} />
          </Link>
        </li>
        <li>
          <Link href={telegramLink} target="_blank">
            <BsTelegram size={28} />
          </Link>
        </li>
      </ContactLinkList>
    </FooterWrapper>
  );
};

export default Footer;
