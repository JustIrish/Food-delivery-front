import { useState, useEffect } from 'react';

import { fetchShops } from 'API/fetchShops';
import ShopsList from 'components/ShopsList/ShopsList';
import ProductsList from 'components/ProductsList/ProductsList';

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
    <>
      <ShopsList shopsArr={shops} onClick={selectShopHandler} />
      {selectedProducts.length > 0 && (
        <ProductsList productsArr={selectedProducts} />
      )}
    </>
  );
};

export default ShopsPage;
