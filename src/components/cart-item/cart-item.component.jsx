import {
  CartContainer,
  ItemDetails,
  CartImage,
  Name,
  Price,
} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartContainer>
      <CartImage src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} x ${price}
        </Price>
      </ItemDetails>
    </CartContainer>
  );
};

export default CartItem;
