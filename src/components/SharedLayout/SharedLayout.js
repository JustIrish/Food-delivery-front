import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import { GlobalStyle } from 'components/GlobalStyle';
import { Layout, Header, Main } from './SharedLayout.styled';
import NavBar from 'components/NavBar/NavBar';

const SharedLayout = () => {
  return (
    <Layout>
      <Header>
        <NavBar />
      </Header>
      <Suspense fallback={null}>
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
