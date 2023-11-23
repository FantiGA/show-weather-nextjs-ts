# show-weather-nextjs-ts

[English](README.md) | **日本語** | [简体中文](README.zh-CN.md)

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

- [show-weather-nextjs-ts](#show-weather-nextjs-ts)
  - [使用法](#使用法)
    - [ラン](#ラン)
    - [テスト](#テスト)
  - [デモ](#デモ)
  - [フレームワーク](#フレームワーク)
  - [ストラテジー](#ストラテジー)
  - [舞台裏](#舞台裏)
    - [私に深く印象に残ったいくつかの困難](#私に深く印象に残ったいくつかの困難)
  - [メンテナ](#メンテナ)
  - [ライセンス](#ライセンス)

ようこそ。

これは [Next.js](https://nextjs.org)、[React](https://react.dev)、[Cypress](https://www.cypress.io) を使ったプロジェクトで、[Weather API](https://www.weatherapi.com) によると地名や緯度経度を入力すると特定の場所の天気を表示することができます。

## 使用法

### ラン

このプロジェクトを実行するには、「npm」を使用してローカルにインストールします。

このプロジェクトを実行するには、 `npm` を​​使用してローカルにインストールします。

```bash
cd ./show-weather-nextjs-ts
npm i
npm run start
```

次に、[http://localhost:3000](http://localhost:3000) にアクセスします。

### テスト

`Cypress` テストを実行するには、別のターミナルを開いて次のコマンドを入力します。

```bash
npm run cy:run
```

結果は後でターミナルに出力されます。

または、次のコマンドを入力して手動テストを行うこともできます。

```bash
npm run cy:open
```

## デモ

`Vercel` に既にデプロイされている [デモ](https://show-weather-nextjs-ts.vercel.app) にアクセスすることもできます。

## フレームワーク

- メインの JavaScript フレームワークは [React 18.2](https://react.dev) バージョンです。React フレームワークは [Next.js 14.0.2](https://nextjs.org) バージョンです。
- [Cypress](https://www.cypress.io)を使用してテスト済み。
- [TypeScript](https://www.typescriptlang.org/) および [ESLint](https://eslint.org/) の型チェックと構文仕様に従いました。
- コードの整形には [Prettier](https://prettier.io) を使用しました。
- [Chrome 119](https://www.google.com/chrome) バージョンに対応しました。
- PC/スマートフォン表示に対応します。 (レスポンシブWebデザイン)
- [Weather API](https://www.weatherapi.com) からのエンドポイントとレスポンス情報を使用しました。

## ストラテジー

- `/app` ディレクトリには、アプリのルーティング構造、レイアウト、およびサーバー側のページ スケルトンが含まれています。
- `/components` ディレクトリには、ページ内の `Current`、`Detail`、`Forecast`、および `Query` コンポーネントが含まれます。
  - `Current` コンポーネントは、`Current Weather` セクションの天気表示に使用されます。
  - `Detail` コンポーネントは、特定の日の天気を表示するために使用されます。
  - `Forecast` は `Next 10 Days` セクションのサブコンポーネントであり、1 日の天気予報とリンクを省略して表示します。
  - `Query` コンポーネントは、Query 部分でフォームを表示し、ブラウザーから地理的位置の許可を要求し、入力コンテンツを受信するために使用されます。
- `/styles` ディレクトリには、上記のコンポーネントの個別のスタイルが含まれています。
- `/utils` ディレクトリがパブリックセクションに配置されました。 `getData.ts` は、`fetch` メソッドを使用してデータを非同期に取得します。
- `/types` ディレクトリには型定義が含まれます。 すべてのフォーム タイプ、コンポーネント プロパティ タイプ、および応答データ タイプが含まれます。
- `/cypress/e2e` ディレクトリには、いくつかの E2E テスト ケースが含まれています。
- セキュリティ上の理由から、`WEATHER_API_KEY` の値を取得するには、事前に Node の環境変数に設定する必要があります。
- 指定されたメソッドと URL を介して `Weather API` にリクエストを送信します。 返されたデータは、要求に応じてページをレンダリングするために使用されます。
- 100% のテスト合格率。
  - 現在 `Cypress` は `Next.js` の `14` バージョンをサポートしていないため、コンポーネント単体テストは実行されず、E2E テストのみが実行されました。
- 総所要時間: 約 `19` 時間。

## 舞台裏

`Next.js` と `Cypress` を初めて使用しました。ドキュメントを読むのに時間がかかり、初期段階では何度も失敗してしまいました。

### 私に深く印象に残ったいくつかの困難

1. 今回は最新の `Next.js` 14 バージョンを使用しているため、`Stack Overflow` の一部の教科書や問題事例は `Next.js` 10 バージョンと `React` 17 バージョンのものを使用しています。公式文書から関連する手がかりを探して、それから自分でゆっくりと探索することしかできません。
2. 当初はプロジェクトを `GitHub Pages` にデプロイしたかったのですが、`Next.js` の環境変数の問題を解決するのがさらに困難でした。`Next.js` を諦めて、使い慣れた `React` に直接戻りたいと思ったことが何度かありました。何度か試した結果、`Vercel` にデプロイすることにしました。思いの外、驚くほどスムーズに進み、特に環境変数を扱う必要もありませんでした。
3. 最新バージョンの `Cypress` が使用されていますが、`Next.js` のバージョン 14 はまだサポートされていないため、コンポーネント単体のテストは行われず、エンドツーエンドのテストのみが行われました。

## メンテナ

[@FantiGA](https://github.com/FantiGA)

## ライセンス

[MIT](LICENSE) © 2023 [@FantiGA](https://github.com/FantiGA)
