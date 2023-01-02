import CartIcon from "./CartIcon";
import { render, screen } from "@testing-library/react";

describe("Cart Icon", () => {
  test("Cart Icon renders number of items", () => {
    render(<CartIcon />);
    expect(screen.getByTestId("cart-icon")).toMatchSnapshot();
  });
});
