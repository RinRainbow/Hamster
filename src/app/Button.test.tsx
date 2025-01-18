import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import { ButtonProps } from "./ButtonProps";
import { ButtonVariant } from "./ButtonVariants";

describe("Button component", () => {
  const defaultProps: ButtonProps = {
    label: "Click me",
    onClick: jest.fn(),
    variant: ButtonVariant.BlackBackground,
  };

  it("should render a button with the correct label", () => {
    render(<Button {...defaultProps} />);
    const simpleButton = screen.getByRole("button");
    expect(simpleButton).toHaveTextContent("Click me");
  });

  it("should call onClick when button is clicked", () => {
    render(<Button {...defaultProps} />);
    const simpleButton = screen.getByRole("button");
    fireEvent.click(simpleButton);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it("should render an anchor tag when href is provided", () => {
    const propsWithHref = { ...defaultProps, href: "https://example.com" };
    render(<Button {...propsWithHref} />);
    const link = screen.getByRole("link");
    expect(link).toHaveTextContent("Click me");
    expect(link).toHaveAttribute("href", "https://example.com");
  });
});
