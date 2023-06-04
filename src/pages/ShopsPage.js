import { useState, useEffect } from 'react';

import { fetchShops } from 'services/API/api';
import ShopsList from 'components/ShopsList/ShopsList';
import ProductsList from 'components/ProductsList/ProductsList';

import { Wrapper } from './Pages.styled';
import { Loader } from 'components/Loader/Loader';

const ShopsPage = () => {
  const [shops, setShops] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedShop, setSelectedShop] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchShops()
      .then(data => setShops(data))
      .catch(error => console.log(error))
      .finally(setIsLoading(false));
  }, []);

  const selectShopHandler = (shopName, products) => {
    setSelectedProducts(products);
    setSelectedShop(shopName);
  };

  return (
    <>
      <Wrapper>
        {isLoading ? (
          <Loader />
        ) : (
          <ShopsList shopsArr={shops} onClick={selectShopHandler} />
        )}

        {selectedProducts.length > 0 && (
          <ProductsList
            productsArr={selectedProducts}
            shopName={selectedShop}
          />
        )}
      </Wrapper>
    </>
  );
};

export default ShopsPage;
