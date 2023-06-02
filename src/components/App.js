import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/HomePage'));
const Shops = lazy(() => import('../pages/ShopsPage'));
const ShoppingCart = lazy(() => import('../pages/ShoppingCartPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/shopping" element={<ShoppingCart />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
