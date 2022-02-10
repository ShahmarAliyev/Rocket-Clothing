import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KMRQSJIocWJmNbIt9zawkvQ1HdVCZF9AmbnB8rnfBo8RfpGFGiVEEw0NhKLY5KTiDOozVDYWoVC2IXdNEqPcLHr00DzfqDOTK";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("Thanks for the payment!");
      })
      .catch((err) => {
        console.log("Payment Error", err);
        alert(
          "There was an issue with your payment. Please  use the provided credit card"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Shahmar's Clothing LLC"
      billingAddress
      shippingAddress
      image="https://img.icons8.com/external-kmg-design-glyph-kmg-design/100/000000/external-rocket-seo-and-marketing-kmg-design-glyph-kmg-design.png"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
