# Integrate Prettier into ESLint

Prettier と ESLint を併用したサンプルコード。

pre-commit フックが動作するようにしているので、`app.js`を更新してコミットすると Prettier と ESLint が実行される。

[Prettier 入門 ～ ESLint との違いを理解して併用する～](https://qiita.com/soarflat/items/06377f3b96964964a65d)

## セットアップ

```
npm install
```

## 使い方

### Prettier を実行

```
npm run format
```

### ESLint を実行

```
npm run lint
```

### Prettier と ESLint を実行

```
npm run fix
```
