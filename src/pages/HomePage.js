const HomePage = () => {
  return (
    <div
      style={{
        backgroundColor: '#ADC9A6',
        height: '100vh',
        paddingTop: '300px',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontWeight: ' 600',
          color: '#172426',
          paddingBottom: '30px',
        }}
      >
        Welcome to our website!
      </h1>
      <p
        style={{
          fontSize: '20px',
          fontWeight: ' 500',
          color: '#172426',
        }}
      >
        Here you have the opportunity to order food from your favorite stores!
        And also review your order history.
      </p>
    </div>
  );
};

export default HomePage;
