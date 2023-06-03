import { useState, useEffect } from 'react';

import { fetchShops } from 'services/API/api';
import ShopsList from 'components/ShopsList/ShopsList';
import ProductsList from 'components/ProductsList/ProductsList';

import { Wrapper } from './ShopsPage.styled';

const ShopsPage = () => {
  const [shops, setShops] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedShop, setSelectedShop] = useState('');

  useEffect(() => {
    fetchShops()
      .then(data => setShops(data))
      .catch(error => console.log(error));
  }, []);

  const selectShopHandler = (shopName, products) => {
    setSelectedProducts(products);
    setSelectedShop(shopName);
  };

  return (
    <Wrapper>
      <ShopsList shopsArr={shops} onClick={selectShopHandler} />
      {selectedProducts.length > 0 && (
        <ProductsList productsArr={selectedProducts} shopName={selectedShop} />
      )}
    </Wrapper>
  );
};

export default ShopsPage;
