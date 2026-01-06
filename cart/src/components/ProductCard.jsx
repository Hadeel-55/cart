import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} color={i < rating ? "#ffb400" : "#e8e1e1"} />
    ));
  };

  return (
    <Card
      className="shadow product-card border-0 rounded-4 overflow-hidden position-relative"
      style={{
        width: "22rem",
        margin: "20px auto",
        transition: "transform 0.3s ease , box-shodow 0.3s ease ",
        background: "linear-gradient(145deg, #f8f9fa , #e9ecef)",
      }}
    >
      <div className="position-relatev">
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
          className="img-fluid"
          style={{ height: "240px", objectFit: "cover" }}
        />

        <Badge className="position-absolute top-0 start-0 m-2 fs-6 px-2 rounded-pill shadow-sm">
          🔥 20% off
        </Badge>

        <Badge
          bg="secondary"
          className="position-absolute top-0 end-0 m-2 fs-6 px-2 rounded-pill shadow-sm"
        >
          {product.price} USD
        </Badge>
      </div>

      <Card.Body className="text-center d-flex flex-column justify-content-between px-3 ">
        <div>
          <Card.Title className="fs-5 fw-bold text-dark mb-1">
            {product.name}
          </Card.Title>

          <Card.Text className="text-muted small mb-2">
            {product.description}
          </Card.Text>

          <div className="d-flex justify-content-center mb-2">
            {renderStars(product.rating || 4)}
          </div>

          <div className="text-decoration-line-through text-muted mb-2 small ">
            {parseFloat(product.price * 1.25).toFixed(2)} USD
          </div>
        </div>

        <Button
          onClick={() => addToCart(product)}
          className="mt-3 rounded-pill fw-semibold d-flex align-center justify-content-center gap-2 text-white"
          style={{ background: "linear-gradient(145deg, #8e2de2, #4a00e0" , border:'none' }}
        >
          <FaShoppingCart />
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
