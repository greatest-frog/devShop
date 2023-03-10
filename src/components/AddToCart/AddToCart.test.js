import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AddToCart from "./AddToCart";

const addGoods = jest.fn();

describe("AddToCart", () => {
  test("Button adds id once", () => {
    render(<AddToCart productId={"123"} addGoods={addGoods} />);
    const button = screen.getByRole("button");

    userEvent.click(button);
    expect(addGoods.mock.calls).toHaveLength(1);
    expect(addGoods.mock.calls[0][0]).toBe("123");
  });

  test("Button adds different ids", () => {
    const { rerender } = render(
      <AddToCart productId={"123"} addGoods={addGoods} />
    );
    const button = screen.getByRole("button");

    userEvent.click(button);
    expect(addGoods.mock.calls).toHaveLength(1);
    expect(addGoods.mock.calls[0][0]).toBe("123");

    rerender(<AddToCart productId={"124"} addGoods={addGoods} />);
    userEvent.click(button);
    expect(addGoods.mock.calls).toHaveLength(2);
    expect(addGoods.mock.calls[1][0]).toBe("124");
  });
});
