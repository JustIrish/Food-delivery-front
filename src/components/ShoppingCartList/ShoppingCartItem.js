import { useState } from 'react';
import { AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai';
import { MdRemove } from 'react-icons/md';

import {
  ListItem,
  Image,
  DescWrap,
  ActivityWrap,
  QuantityWrap,
  Btn,
  BtnWrap,
} from './ShoppingCartList.styled';

const ShoppingCartItem = ({
  id,
  name,
  imageUrl,
  price,
  description,
  quantity,
  onRemove,
  onIncr,
  onDecr,
}) => {
  const [actualQuantity, setActualQuantity] = useState(quantity);

  const onIncrementClick = () => {
    setActualQuantity(prevState => prevState + 1);
    onIncr(id);
  };

  const onDecrementClick = () => {
    setActualQuantity(prevState => prevState - 1);
    onDecr(id);
  };

  return (
    <ListItem>
      <Image src={imageUrl} alt={name} width="100" loading="lazy" />
      <DescWrap>
        <p> {name}</p>

        <p> {description}</p>
        <ActivityWrap>
          <QuantityWrap>
            <Btn onClick={onDecrementClick} disabled={!quantity}>
              <MdRemove size={12} />
            </Btn>
            {actualQuantity}{' '}
            <Btn onClick={onIncrementClick}>
              <AiOutlinePlus size={12} />
            </Btn>
          </QuantityWrap>

          <p> {price} $</p>
        </ActivityWrap>
      </DescWrap>
      <BtnWrap>
        <Btn onClick={() => onRemove(id)}>
          <AiOutlineDelete size={22} />
        </Btn>
      </BtnWrap>
    </ListItem>
  );
};

export default ShoppingCartItem;
