import { ButtonVariant } from "./ButtonVariants";
import { ButtonState } from "./ButtonStates";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  variant: ButtonVariant;
  state?: ButtonState;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  height?: string;
  width?: string;
}
