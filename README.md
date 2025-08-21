# React-Native Application Layout Framework (ALF)

Primitives for styling UI components

# Usage

## Auto

Initialize rn-alf.json config file

```sh
npx rn-alf init
```

## Manual

Create `rn-alf.json` file in root project directory with following data

```json
{
  "atoms": {
    "name": "alf",
    "path": "src/styles/alf.ts"
  },
  "spaces": {
    "_2xs": 2,
    "xs": 4,
    "sm": 8,
    "md": 12,
    "lg": 16,
    "xl": 20,
    "_2xl": 24,
    "_3xl": 28,
    "_4xl": 32,
    "_5xl": 40
  }
}
```

Generate alf styles

```sh
npx rn-alf gen
```

## Inspiration

The original idea belongs to [bluesky](https://github.com/bluesky-social/social-app/blob/main/src/alf/README.md)
