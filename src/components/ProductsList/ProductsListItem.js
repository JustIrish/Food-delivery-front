import { SlBasket } from 'react-icons/sl';

import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from 'services/localStorage';

import {
  ProductsItem,
  Image,
  Text,
  TitleWrap,
  BasketBtn,
} from './ProductsList.styled';

const ProductsListItem = ({
  shopName,
  id,
  name,
  imageUrl,
  price,
  description,
}) => {
  const onBasketClick = () => {
    const order = loadFromLocalStorage('order') || [];

    const obj = { shopName, id, name, imageUrl, price, description };

    saveToLocalStorage('order', [...order, obj]);
  };

  return (
    <ProductsItem>
      <Image src={imageUrl} alt={name} width="343" loading="lazy" />
      <Text>{price}</Text>
      <TitleWrap>
        <p>{name}</p>
        <BasketBtn type="button" onClick={onBasketClick}>
          <SlBasket size="18" />
        </BasketBtn>
      </TitleWrap>
    </ProductsItem>
  );
};

export default ProductsListItem;
