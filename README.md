# react-fixed-aspect-ratio-box

> A container that adapts the width or height of its child to preserve its specified aspect ratio.

[![NPM](https://img.shields.io/npm/v/react-fixed-aspect-ratio-box.svg)](https://www.npmjs.com/package/react-fixed-aspect-ratio-box)

## Example

https://davidedefeudis.github.io/react-fixed-aspect-ratio-box/

## Install

```bash
npm i react-fixed-aspect-ratio-box
```

## Usage

```jsx
import React from 'react'
import FixedAspectRatioBox from 'react-fixed-aspect-ratio-box'
import 'react-fixed-aspect-ratio-box/dist/index.css'

function App() {
  return (
    <FixedAspectRatioBox targetAspectRatio={16 / 9}>
      <div className='child'></div>
    </FixedAspectRatioBox>
  )
}
```

## Props

| Prop              | Type   | Description                                           |
| ----------------- | ------ | ----------------------------------------------------- |
| targetAspectRatio | number | The aspect ratio that must be preserved by the child. |

## License

MIT © [Davide De Feudis](https://github.com/DavideDeFeudis)
