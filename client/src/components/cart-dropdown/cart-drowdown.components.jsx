import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from "./cart-dropdown.styles";
import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/cart-item.components";
import toggleCartHidden from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import { useDispatch, useSelector } from "react-redux";

const CartDropdown = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer> Empty Cart</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          navigate("checkout");
          dispatch(toggleCartHidden());
        }}
      >
        Checkout
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
