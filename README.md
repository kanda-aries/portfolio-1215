# KANDA AIKA Portfolio (Vite + React + TypeScript)

神田 愛花（KANDA AIKA）のポートフォリオサイトプロジェクトです。
Vite, React, TypeScriptを使用して構築されており、GSAPによるアニメーションやSplide.jsによるスライダーが含まれています。

## 技術スタック

- **Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** CSS Modules (Vanilla CSS/SCSS structure)
- **Routing:** React Router DOM
- **Animation:** GSAP
- **Slider:** Splide.js

## 開発環境のセットアップ

以下の手順でローカル環境を立ち上げることができます。

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```
起動後、ターミナルに表示されるローカルURL（通常は `http://localhost:5173`）にアクセスして確認してください。

### 3. ビルド

本番環境用にビルドする場合：

```bash
npm run build
```

## ディレクトリ構造

主なディレクトリ構造は以下の通りです。

```
src/
├── assets/          # 画像やグローバルCSSなどの静的リソース
├── components/      # Reactコンポーネント
│   ├── layout/      # Header, Footer, Mainなどのレイアウト部品
│   └── template/    # ページ全体のテンプレート（DefaultTemplate等）
├── pages/           # 各ページコンポーネント (Home, NotFound等)
├── router.tsx       # ルーティング設定
└── main.tsx         # エントリーポイント
```

## 注意事項

- コンポーネントは `PascalCase` で命名・ディレクトリ管理されています。
- スタイルはコンポーネントごとに `*.module.css` を使用してスコープを限定しています。

## CSS記述ルール

本プロジェクトでは **CSS Modules** を採用しています。
クラス名の命名規則は、コンポーネント名に合わせた **PascalCase** のブロック名と、BEMライクな構造を基本としています。

### 命名規則 (BEMライク)

- **Block (ブロック):** コンポーネント名と同じ `PascalCase` を使用します。
  - 例: `Home.module.css` 内のルート要素 -> `.Home`
- **Element (エレメント):** Blockの下に `__` (アンダースコア2つ) で繋げ、`PascalCase` で記述します。
  - 例: `.Home__Firstview`, `.Home__Heading`
- **Modifier (モディファイア):** 状態変化などを表す場合は `--` (ハイフン2つ) で繋げます。
  - 例: `.Home__Button--Active`

### ディレクトリとファイルの対応例

```
src/pages/Home/
├── index.tsx       # コンポーネント本体
└── Home.module.css # スタイル定義
```

**Home.module.css**
```css
.Home {
  /* ... */
  .Home__Firstview {
    /* ... */
  }
}
```

**index.tsx**
```tsx
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.Home}>
      <section className={styles.Home__Firstview}>
        ...
      </section>
    </div>
  );
}
```
