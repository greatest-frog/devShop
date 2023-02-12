import "./AddToCart.css";

const AddToCart = ({productId, addGoods}) => {
  return (
    <button className="btn_add-to-cart" onClick={() => addGoods(productId)}>
      <img
        src="https://greatest-frog.github.io/devShop/resources/images/cart-plus.png"
        alt="add to cart"
      />
    </button>
  );
};

export default AddToCart;
