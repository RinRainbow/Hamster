import React from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./ButtonProps";
import { ButtonState } from "./ButtonStates";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  href,
  target,
  variant,
  state,
  iconLeft,
  iconRight,
  height,
  width,
}) => {
  const classNames = [
    styles.button,
    styles[variant],
    state ? styles[state] : "",
  ].join(" ");

  const buttonStyle = {
    height: height,
    width: width,
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={classNames}
        onClick={onClick}
        style={buttonStyle}
      >
        {iconLeft && <span className={styles.icon}>{iconLeft}</span>}
        {label}
        {iconRight && <span className={styles.icon}>{iconRight}</span>}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={state === ButtonState.Inactive}
      style={buttonStyle}
    >
      {iconLeft && <span className={styles.icon}>{iconLeft}</span>}
      {label}
      {iconRight && <span className={styles.icon}>{iconRight}</span>}
    </button>
  );
};

export default Button;
