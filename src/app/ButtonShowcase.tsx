import React from "react";
import Button from "./Button";
import { ButtonVariant } from "./ButtonVariants";
import { ButtonState } from "./ButtonStates";
import styles from "./ButtonShowcase.module.css";

const ButtonShowcase: React.FC = () => {
  return (
    <div className={styles.showcase}>
      <h1>Button Showcase</h1>
      <div className={styles.buttonGroup}>
        <h2>Variants</h2>
        <Button
          label="Black Background"
          variant={ButtonVariant.BlackBackground}
        />
        <Button
          label="White Background with Border"
          variant={ButtonVariant.WhiteBackgroundWithBorder}
        />
        <Button
          label="White Background"
          variant={ButtonVariant.WhiteBackground}
        />
      </div>
      <div className={styles.buttonGroup}>
        <h2>States</h2>
        <Button
          label="Inactive"
          variant={ButtonVariant.BlackBackground}
          state={ButtonState.Inactive}
        />
        <Button
          label="Loading"
          variant={ButtonVariant.BlackBackground}
          state={ButtonState.Loading}
        />
        <Button
          label="Hover"
          variant={ButtonVariant.BlackBackground}
          state={ButtonState.Hover}
        />
        <Button
          label="Focus"
          variant={ButtonVariant.BlackBackground}
          state={ButtonState.Focus}
        />
      </div>
      <div className={styles.buttonGroup}>
        <h2>With Icons</h2>
        <Button
          label="Left Icon"
          variant={ButtonVariant.BlackBackground}
          iconLeft={<span>🔍</span>}
        />
        <Button
          label="Right Icon"
          variant={ButtonVariant.BlackBackground}
          iconRight={<span>➡️</span>}
        />
        <Button
          label="Both Icons"
          variant={ButtonVariant.BlackBackground}
          iconLeft={<span>🔍</span>}
          iconRight={<span>➡️</span>}
        />
      </div>
      <div className={styles.buttonGroup}>
        <h2>As Link</h2>
        <Button
          label="Link Button"
          variant={ButtonVariant.BlackBackground}
          href="https://example.com"
          target="_blank"
        />
      </div>
    </div>
  );
};

export default ButtonShowcase;
