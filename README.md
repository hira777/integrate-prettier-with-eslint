# Integrate Prettier into ESLint

Sample Code integrating Prettier into ESLint.

Learn more about files in this repository, read following article I posted (Japanese).

[Prettier 入門 ～ESLintとの違いを理解して併用する～](https://qiita.com/soarflat/items/06377f3b96964964a65d)

## Installation

```
npm install
```

## Usage

### ESLint(with Prettier)

You can format, lint, auto-fix your code using Prettier and ESLint when you run command below.

```
npm run lint
```

### Pre-commit Hook

You can use ESLint(with Prettier) with a pre-commit tool. This can run `npm run lint` to your files that are marked as "staged" via `git add` before you commit.
