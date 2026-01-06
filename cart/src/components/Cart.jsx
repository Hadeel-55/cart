import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Card, Button } from "react-bootstrap";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalPrice } = useContext(CartContext);
  if (cart.length === 0) {
    return (
      <div className="text-center mt-5">
        <h2>Your cart Is Empty</h2>
        <Link to="/">
          <Button variant="primary" className="mt-3">
            Go to Products
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h3 className="mb-4 ">Shopping Cart</h3>

      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <Card className="mt-4">
        <Card.Body className="text-end">
          <h5>Total: {totalPrice} USD </h5>

          <Link to='/checkout'  >
<Button 
variant="success" className="mt-3">
   Proceed to Checkout 
</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Cart;
