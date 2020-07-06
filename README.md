<p align="center">
    <img src="https://user-images.githubusercontent.com/6702424/80216211-00ef5280-863e-11ea-81de-59f3a3d4b8e4.png">  
</p>
<p align="center">
    <i></i>
    <br>
    <br>
    <img src="https://github.com/garronej/event_loop_and_promises/workflows/ci/badge.svg?branch=master">
    <img src="https://img.shields.io/bundlephobia/minzip/event_loop_and_promises">
    <img src="https://img.shields.io/npm/dw/event_loop_and_promises">
    <img src="https://img.shields.io/npm/l/event_loop_and_promises">
</p>
<p align="center">
  <a href="https://github.com/thieryw/event_loop_and_promises">Home</a>
  -
  <a href="https://github.com/thieryw/event_loop_and_promises">Documentation</a>
</p>

# Install / Import

```bash
$ npm install --save event_loop_and_promises
```

```typescript
import { myFunction, myObject } from "event_loop_and_promises";
```

Specific imports:

```typescript
import { myFunction } from "event_loop_and_promises/myFunction";
import { myObject } from "event_loop_and_promises/myObject";
```

## Import from HTML, with CDN

Import it via a bundle that creates a global ( wider browser support ):

```html
<script src="//unpkg.com/event_loop_and_promises/bundle.min.js"></script>
<script>
    const { myFunction, myObject } = event_loop_and_promises;
</script>
```

Or import it as an ES module:

```html
<script type="module">
    import {
        myFunction,
        myObject,
    } from "//unpkg.com/event_loop_and_promises/zz_esm/index.js";
</script>
```

_You can specify the version you wish to import:_ [unpkg.com](https://unpkg.com)

## Contribute

```bash
npm install
npm run build
npm test
```
