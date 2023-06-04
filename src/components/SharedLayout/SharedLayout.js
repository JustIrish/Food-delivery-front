import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { RotatingLines } from 'react-loader-spinner';

import { GlobalStyle } from 'components/GlobalStyle';
import { Layout, Header, Main } from './SharedLayout.styled';
import NavBar from 'components/NavBar/NavBar';

const SharedLayout = () => {
  return (
    <Layout>
      <Header>
        <NavBar />
      </Header>
      <Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '200px',
            }}
          >
            <RotatingLines
              strokeColor="#84A17D"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          </div>
        }
      >
        <Main>
          <Outlet />
        </Main>
      </Suspense>
      <GlobalStyle />
      <Toaster position="top-center" reverseOrder={false} />
    </Layout>
  );
};

export default SharedLayout;
