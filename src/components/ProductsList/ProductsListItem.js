import { SlBasket } from 'react-icons/sl';

import { ProductsItem, Image, TitleWrap } from './ProductsList.styled';

const ProductsListItem = ({ name, imageUrl }) => {
  return (
    <ProductsItem>
      <Image src={imageUrl} alt={name} width="343" loading="lazy" />
      <TitleWrap>
        <p>{name}</p>
        <button type="button">
          <SlBasket size="18" />
        </button>
      </TitleWrap>
    </ProductsItem>
  );
};

export default ProductsListItem;
