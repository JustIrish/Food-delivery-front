import { SlBasket } from 'react-icons/sl';
import { toast } from 'react-hot-toast';

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

const ProductsListItem = ({ shop, id, name, imageUrl, price, description }) => {
  const onBasketClick = () => {
    const order = loadFromLocalStorage('order') || [];

    if (order.length > 0 && order[0].shop !== shop) {
      toast.error('You can order products only from one selected store!');
      return;
    }

    const product = order.find(item => item.id === id);

    if (!product) {
      const obj = {
        shop,
        id,
        name,
        imageUrl,
        price,
        description,
        quantity: 1,
      };

      saveToLocalStorage('order', [...order, obj]);
    } else {
      order.find(item => item.id === id && (item.quantity = item.quantity + 1));
      saveToLocalStorage('order', [...order]);
    }
    toast.success('Product has been added to basket!');
  };

  return (
    <ProductsItem>
      <Image src={imageUrl} alt={name} width="343" loading="lazy" />
      <Text>{price} $</Text>
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
