import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./index";

describe("<Button />", () => {
  it("should render the button", () => {
    render(<Button>Button</Button>);

    const element = screen.getByTestId("button");

    expect(element).toBeInTheDocument();
  });

  it("should call the button function", () => {
    const clickFn = jest.fn();

    render(<Button onClick={clickFn}>Button</Button>);

    const element = screen.getByTestId("button");

    fireEvent.click(element);
    expect(clickFn).toHaveBeenCalled();
  });
});
