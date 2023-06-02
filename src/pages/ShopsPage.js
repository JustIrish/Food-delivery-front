import { useState, useEffect } from 'react';

import { fetchShops } from 'API/fetchShops';
import ShopsList from 'components/ShopsList/ShopsList';
import ProductsList from 'components/ProductsList/ProductsList';

import { Wrapper } from './ShopsPage.styled';

const ShopsPage = () => {
  const [shops, setShops] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    fetchShops()
      .then(data => setShops(data))
      .catch(error => console.log(error));
  }, []);

  const selectShopHandler = products => {
    setSelectedProducts(products);
  };

  return (
    <Wrapper>
      <ShopsList shopsArr={shops} onClick={selectShopHandler} />
      {selectedProducts.length > 0 && (
        <ProductsList productsArr={selectedProducts} />
      )}
    </Wrapper>
  );
};

export default ShopsPage;
