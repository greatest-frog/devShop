import "./AddToCart.css";

const AddToCart = ({ productId, addGoods }) => {
  return (
    <button className="btn_add-to-cart" onClick={() => addGoods(productId)}>
      <img
        src={process.env.PUBLIC_URL + "/resources/images/cart-plus.png"}
        alt="add to cart"
      />
    </button>
  );
};

export default AddToCart;
