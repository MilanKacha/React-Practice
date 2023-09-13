import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const productInCart = useSelector((state) => state.cart.items);
  // console.log(productInCar);
  const dispatch = useDispatch();

  const removeFromCart = (product) => {
    dispatch(remove(product));
  };
  return (
    <div>
      {/* {JSON.stringify(productInCart)} */}
      {productInCart.map((product, index) => (
        <div className="col-md-3" key={product.id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.price}</Card.Text>
            </Card.Body>
            <Card.Footer style={{ background: "white" }}>
              <Button
                variant="primary"
                onClick={() => removeFromCart(product.id)}
              >
                Remove from Cart
              </Button>
            </Card.Footer>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Cart;
