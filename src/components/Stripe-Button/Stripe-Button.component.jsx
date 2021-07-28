import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JI4GfJWkqo6a2cBrWtihWZ9S4bD8NpPfeQXnHb37NuuhvvEypuTDzQMZ1sBmMRYiVOONsfiUPx3ZzJ8s9XLiabY00wbM93X82";

  const onToken = (token) => {
    console.log(token);
    alert("Payment sucessful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crwn Clothing"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
