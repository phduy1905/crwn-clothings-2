import CustomButton from "../CustomButton/CustomButton.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";

import "./CartDropdown.style.scss";
import CartItem from "../CartItem/CartItem.component";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
