"use client";

import React from "react";
import Button from "./Button";
import { ButtonVariant } from "./ButtonVariants";
import { ButtonState } from "./ButtonStates";
import styles from "./ButtonShowcase.module.css";

const ButtonShowcase: React.FC = () => {
  const handleClick = () => {
    alert("ボタンがクリックされました！");
  };
  const handleSubmitClick = () => {
    alert("Submitボタンがクリックされました！");
  };

  return (
    <div className={styles.showcase}>
      <h1>ボタン全パターン</h1>
      <div className={styles.buttonGroup}>
        <h2>基本3パターン（テキストのみ）</h2>
        <Button label="黒背景+白文字" variant={ButtonVariant.BlackBackground} />
        <Button
          label="白背景+黒文字+黒枠"
          variant={ButtonVariant.WhiteBackgroundWithBorder}
        />
        <Button label="白背景+黒文字" variant={ButtonVariant.WhiteBackground} />
      </div>
      <div className={styles.buttonGroup}>
        <h2>基本3パターン（アイコンあり）</h2>
        <Button
          label="黒背景+白文字+左アイコン"
          variant={ButtonVariant.BlackBackground}
          iconLeft={<span>💖</span>}
        />
        <Button
          label="黒背景+白文字+右アイコン"
          variant={ButtonVariant.BlackBackground}
          iconRight={<span>💖</span>}
        />
        <Button
          label="黒背景+白文字+左右アイコン"
          variant={ButtonVariant.BlackBackground}
          iconLeft={<span>💖</span>}
          iconRight={<span>💖</span>}
        />
        <br />
        <Button
          label="白背景+黒文字+黒枠+左アイコン"
          variant={ButtonVariant.WhiteBackgroundWithBorder}
          iconLeft={<span>😸</span>}
        />
        <Button
          label="白背景+黒文字+黒枠+右アイコン"
          variant={ButtonVariant.WhiteBackgroundWithBorder}
          iconRight={<span>😸</span>}
        />
        <Button
          label="白背景+黒文字+黒枠+左右アイコン"
          variant={ButtonVariant.WhiteBackgroundWithBorder}
          iconLeft={<span>😸</span>}
          iconRight={<span>😸</span>}
        />
        <br />
        <Button
          label="白背景+黒文字+左アイコン"
          variant={ButtonVariant.WhiteBackground}
          iconLeft={<span>🌷</span>}
        />
        <Button
          label="白背景+黒文字+右アイコン"
          variant={ButtonVariant.WhiteBackground}
          iconRight={<span>🌷</span>}
        />
        <Button
          label="白背景+黒文字+左右アイコン"
          variant={ButtonVariant.WhiteBackground}
          iconLeft={<span>🌷</span>}
          iconRight={<span>🌷</span>}
        />
      </div>
      <div className={styles.buttonGroup}>
        <h2>状態（4種類）</h2>
        <Button
          label="非活性"
          variant={ButtonVariant.BlackBackground}
          state={ButtonState.Inactive}
        />
        <Button
          label="非活性"
          variant={ButtonVariant.WhiteBackgroundWithBorder}
          state={ButtonState.Inactive}
        />
        <Button
          label="非活性"
          variant={ButtonVariant.WhiteBackground}
          state={ButtonState.Inactive}
        />
        <br />
        <Button
          label="ローディング中"
          variant={ButtonVariant.BlackBackground}
          state={ButtonState.Loading}
        />
        <Button
          label="ローディング中"
          variant={ButtonVariant.WhiteBackgroundWithBorder}
          state={ButtonState.Loading}
        />
        <Button
          label="ローディング中"
          variant={ButtonVariant.WhiteBackground}
          state={ButtonState.Loading}
        />
        <br />
        <Button
          label="ホバー時"
          variant={ButtonVariant.BlackBackground}
          state={ButtonState.Hover}
        />
        <Button
          label="ホバー時"
          variant={ButtonVariant.WhiteBackgroundWithBorder}
          state={ButtonState.Hover}
        />
        <Button
          label="ホバー時"
          variant={ButtonVariant.WhiteBackground}
          state={ButtonState.Hover}
        />
        <br />
        <Button
          label="フォーカス時"
          variant={ButtonVariant.BlackBackground}
          state={ButtonState.Focus}
        />
        <Button
          label="フォーカス時"
          variant={ButtonVariant.WhiteBackgroundWithBorder}
          state={ButtonState.Focus}
        />
        <Button
          label="フォーカス時"
          variant={ButtonVariant.WhiteBackground}
          state={ButtonState.Focus}
        />
      </div>
      <div className={styles.buttonGroup}>
        <h2>クリック時に発火する関数</h2>
        <Button
          label="クリックしてください"
          variant={ButtonVariant.BlackBackground}
          onClick={handleClick}
        />
        <Button
          label="クリックしてください"
          variant={ButtonVariant.WhiteBackgroundWithBorder}
          onClick={handleClick}
        />
        <Button
          label="クリックしてください"
          variant={ButtonVariant.WhiteBackground}
          onClick={handleClick}
        />
      </div>
      <div className={styles.buttonGroup}>
        <h2>Submitボタン</h2>
        <Button
          label="Submit"
          variant={ButtonVariant.BlackBackground}
          type="submit"
          onClick={handleSubmitClick}
        />
        <Button
          label="Submit"
          variant={ButtonVariant.WhiteBackgroundWithBorder}
          type="submit"
          onClick={handleSubmitClick}
        />
        <Button
          label="Submit"
          variant={ButtonVariant.WhiteBackground}
          type="submit"
          onClick={handleSubmitClick}
        />
      </div>
      <div className={styles.buttonGroup}>
        <h2>リンク</h2>
        <Button
          label="新しいタブで開く"
          variant={ButtonVariant.BlackBackground}
          href="https://example.com"
          target="_blank"
        />
        <Button
          label="新しいタブで開く"
          variant={ButtonVariant.WhiteBackgroundWithBorder}
          href="https://example.com"
          target="_blank"
        />
        <Button
          label="新しいタブで開く"
          variant={ButtonVariant.WhiteBackground}
          href="https://example.com"
          target="_blank"
        />
        <br />
        <Button
          label="同じタブで開く"
          variant={ButtonVariant.BlackBackground}
          href="https://example.com"
          target="_self"
        />
        <Button
          label="同じタブで開く"
          variant={ButtonVariant.WhiteBackgroundWithBorder}
          href="https://example.com"
          target="_self"
        />
        <Button
          label="同じタブで開く"
          variant={ButtonVariant.WhiteBackground}
          href="https://example.com"
          target="_self"
        />
        <br />
        <Button
          label="親フレームで開く"
          variant={ButtonVariant.BlackBackground}
          href="https://example.com"
          target="_parent"
        />
        <Button
          label="親フレームで開く"
          variant={ButtonVariant.WhiteBackgroundWithBorder}
          href="https://example.com"
          target="_parent"
        />
        <Button
          label="親フレームで開く"
          variant={ButtonVariant.WhiteBackground}
          href="https://example.com"
          target="_parent"
        />
        <br />
        <Button
          label="最上位フレームで開く"
          variant={ButtonVariant.BlackBackground}
          href="https://example.com"
          target="_top"
        />
        <Button
          label="最上位フレームで開く"
          variant={ButtonVariant.WhiteBackgroundWithBorder}
          href="https://example.com"
          target="_top"
        />
        <Button
          label="最上位フレームで開く"
          variant={ButtonVariant.WhiteBackground}
          href="https://example.com"
          target="_top"
        />
      </div>
    </div>
  );
};

export default ButtonShowcase;
