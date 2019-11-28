import {Hex} from "../main/index";

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

console.log("Invalid hex:", Hex.isHex("1atp") === false);
console.log("Invalid hex:", Hex.isHex("12abc") === false);
console.log("Not equal:", Hex.equals("12ab", "12ac") === false);

// perf toHex
var testBuf = new Uint8Array(256);
for (let i = 0; i < testBuf.length; i++) {
    testBuf[i] = i;
}
var beg = Date.now();
for (var i = 0; i < 100000; i++) Hex.toHex(testBuf);
var end = Date.now();
console.log("x100000 toHex at 256-length Uint8Array:", end - beg, "ms");

// perf fromHex
var testHex = Hex.toHex(testBuf);
var beg = Date.now();
for (var i = 0; i < 100000; i++) Hex.fromHex(testHex);
var end = Date.now();
console.log("x100000 fromHex at 512-length string:", end - beg, "ms");