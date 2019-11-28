hex-fl
====

Simple Uint8Array to hex encoder/decoder

Example
---

```typescript
import {Hex} from "hex-fl";

let input = "0123456789abcdefABCDEF";
console.log("Input:", input);

let isHex = Hex.isHex(input);
console.log("Input is hex:", isHex);

let buffer = Hex.fromHex(input);
console.log("Buffer:", buffer);

let hex = Hex.toHex(buffer);
console.log("Hex:", hex);

let equals = Hex.equals(input, hex);
console.log("Hex equal to input:", equals);
```

License
---

The MIT License (MIT)
