import { useSelector } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.components";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from "./checkout.styles";

const Checkoutpage = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span> Product</span>
        </HeaderBlockContainer>

        <HeaderBlockContainer>
          <span> Description</span>
        </HeaderBlockContainer>

        <HeaderBlockContainer className="header-block">
          <span> Price</span>
        </HeaderBlockContainer>

        <HeaderBlockContainer>
          <span> Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <TotalContainer>TOTAL:${cartTotal}</TotalContainer>
      <WarningContainer>
        Use test credit card below for payments
        <br />
        5555 5555 5555 4444 - Exp: 01/25 - CVV:0000
      </WarningContainer>
      <StripeCheckoutButton price={cartTotal} />
    </CheckoutPageContainer>
  );
};

export default Checkoutpage;
