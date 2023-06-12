import { HomeTextWrap, Title, Text, Link } from './Pages.styled';

const HomePage = () => {
  return (
    <div
      style={{
        backgroundColor: '#ADC9A6',
        height: '100vh',
        paddingTop: '200px',
      }}
    >
      <HomeTextWrap>
        <Title>Welcome to our website!</Title>
        <Text>
          <Link to="/shops">Here </Link> you have the opportunity to order food
          from your favorite stores! And also review your
          <Link to="/history"> order history.</Link>
        </Text>
      </HomeTextWrap>
    </div>
  );
};

export default HomePage;
