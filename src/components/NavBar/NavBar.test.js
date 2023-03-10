import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./NavBar";

const setMode = jest.fn()

describe('NavBar', () => {
    test("NavBar changes mode", () => {
        const {rerender} = render(<NavBar setMode={setMode} mode="light" goodsNumber={0} />, {wrapper: BrowserRouter});
        const button = screen.getByRole("button");

        userEvent.click(button);
        expect(setMode.mock.calls).toHaveLength(1);
        expect(setMode.mock.calls[0][0]).toBe("dark");

        rerender(<NavBar setMode={setMode} mode="dark" goodsNumber={0} />, {wrapper: BrowserRouter});
        userEvent.click(button);
        expect(setMode.mock.calls).toHaveLength(2);
        expect(setMode.mock.calls[1][0]).toBe("light");
    })
});