## 🖥️ Demo
🐹 https://hamster-neon-nine.vercel.app

## 🛠️ Version
* React: 18.3.1
* Next.js: 15.1.4
* TypeScript: 5.7.3
* Node.js: 23.6.0
* npm: 11.0.0

## 🔍 How to use Button component
Import `Button` to get start ✨
```typescript
import Button from "./Button";
```

**Props**
* label: string型（必須）
* onClick: クリック時に呼び出される関数
* type: デフォルトは`button`にしている。`submit`にすることも出来る
* href: URL指定（string型）
* target: リンクとして振る舞うときのリンクを開く先を指定する
  * `_blank`: 新しいタブで開く
  * `_self`: 同じタブで開く
  * `_parent`: 親フレームで開く
  * `_top`: 最上位フレームで開く
* variant: ボタンの見た目（必須）
  * `BlackBackground`: 黒背景+白文字
  * `WhiteBackgroundWithBorder`: 白背景+黒文字+黒枠
  * `WhiteBackground`: 白背景+黒文字
* state: ボタンの状態
  * `Inactive`: 非活性
  * `Loading`: ローディング中
  * `Hover`: ホバー時
  * `Focus`: フォーカス時
* iconLeft: 左側のアイコン
* iconRight: 右側のアイコン
* height: ボタンの縦幅（string型）
* width: ボタンの横幅（string型）

※具体的な使い方は`ButtonShowcase.tsx`を参考にしてください。
