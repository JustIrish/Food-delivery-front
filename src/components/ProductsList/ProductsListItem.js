import { SlBasket } from 'react-icons/sl';

import {
  ProductsItem,
  Image,
  Text,
  TitleWrap,
  BasketBtn,
} from './ProductsList.styled';

const ProductsListItem = ({ name, imageUrl, price }) => {
  return (
    <ProductsItem>
      <Image src={imageUrl} alt={name} width="343" loading="lazy" />
      <Text>{price}</Text>
      <TitleWrap>
        <p>{name}</p>
        <BasketBtn type="button">
          <SlBasket size="18" />
        </BasketBtn>
      </TitleWrap>
    </ProductsItem>
  );
};

export default ProductsListItem;
