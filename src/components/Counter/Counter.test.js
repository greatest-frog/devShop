import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./Counter";

const setAmount = jest.fn();

describe("Counter", () => {
  test("Counter changes value", () => {
    render(
      <Counter amount={1} max={12} itemId={"123"} setAmount={setAmount} />
    );
    const input = screen.getByDisplayValue(1);

    userEvent.type(input, "1");
    expect(setAmount.mock.calls).toHaveLength(1);
    expect(setAmount.mock.calls[0]).toEqual(["123", 11]);
  });
  
  test("Counter doesn't exceed the max value", () => {
    render(
      <Counter amount={1} max={10} itemId={"124"} setAmount={setAmount} />
    );
    const input = screen.getByDisplayValue(1);

    userEvent.type(input, "1");
    expect(setAmount.mock.calls).toHaveLength(1);
    expect(setAmount.mock.calls[0]).toEqual(["124", 10]);
  });

  test("Counter rerenders", () => {
    const { rerender } = render(
      <Counter amount={1} max={10} itemId={"124"} setAmount={setAmount} />
    );
    expect(screen.getByDisplayValue(1)).toBeTruthy();

    rerender(
      <Counter amount={2} max={10} itemId={"124"} setAmount={setAmount} />
    );
    expect(screen.getByDisplayValue(2)).toBeTruthy();
  });

  test("Counter increases and decreases value", () => {
    const { rerender } = render(
      <Counter amount={1} max={10} itemId={"125"} setAmount={setAmount} />
    );
    const buttonPlus = screen.getByRole("button", { name: "+" });
    const buttonMinus = screen.getByRole("button", { name: "-" });

    userEvent.click(buttonPlus);
    expect(setAmount.mock.calls).toHaveLength(1);
    expect(setAmount.mock.calls[0]).toEqual(["125", 2]);

    rerender(
      <Counter amount={2} max={10} itemId={"125"} setAmount={setAmount} />
    );
    userEvent.click(buttonMinus);
    expect(setAmount.mock.calls).toHaveLength(2);
    expect(setAmount.mock.calls[1]).toEqual(["125", 1]);
  });
});
