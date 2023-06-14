import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import { GlobalStyle } from 'components/GlobalStyle';
import { Layout, Header } from './SharedLayout.styled';
import NavBar from 'components/NavBar/NavBar';
import Footer from 'components/Footer/Footer';
import Spinner from 'components/Spinner/Spinner';

const SharedLayout = () => {
  return (
    <Layout>
      <Header>
        <NavBar />
      </Header>
      <Suspense fallback={<Spinner />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
      <GlobalStyle />
      <Toaster position="top-center" reverseOrder={false} />
    </Layout>
  );
};

export default SharedLayout;
