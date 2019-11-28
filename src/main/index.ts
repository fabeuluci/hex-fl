class HexHelper {
    
    static BYTE_TO_HEX_MAP: string[];
    static CHAR_TO_VALUE_MAP: number[];
    
    static init() {
        HexHelper.BYTE_TO_HEX_MAP = new Array(256);
        for (let i = 0; i < 256; i++) {
            let hex = i.toString(16);
            HexHelper.BYTE_TO_HEX_MAP[i] = hex.length == 1 ? "0" + hex : hex;
        }
        
        HexHelper.CHAR_TO_VALUE_MAP = new Array(256);
        // 0-9 chars maps to 0-9
        for (let i = 0; i < 10; i++) {
            HexHelper.CHAR_TO_VALUE_MAP[48 + i] = i;
        }
        // A-F chars maps to 10-15
        for (let i = 0; i < 6; i++) {
            HexHelper.CHAR_TO_VALUE_MAP[65 + i] = 10 + i;
        }
        // a-f chars maps to 10-15
        for (let i = 0; i < 6; i++) {
            HexHelper.CHAR_TO_VALUE_MAP[97 + i] = 10 + i;
        }
    }
}

HexHelper.init();

export class Hex {
    
    static equals(aHex: string, bHex: string): boolean {
        return aHex.toLowerCase() == bHex.toLowerCase();
    }
    
    static isHex(str: string): boolean {
        if (str.length % 2 != 0) {
            return false;
        }
        for (let i = 0; i < str.length; i++) {
            if (HexHelper.CHAR_TO_VALUE_MAP[str.charCodeAt(i)] == null) {
                return false;
            }
        }
        return true;
    }
    
    static fromHex(str: string): Uint8Array {
        if (str.length % 2 != 0) {
            throw new Error("Invalid hex");
        }
        let res = new Uint8Array(str.length / 2);
        for (let i = 0, j = 0; i < str.length; i += 2, j++) {
            let h = HexHelper.CHAR_TO_VALUE_MAP[str.charCodeAt(i)];
            let l = HexHelper.CHAR_TO_VALUE_MAP[str.charCodeAt(i + 1)];
            if (h == null || l == null) {
                throw new Error("Invalid hex char");
            }
            res[j] = h * 16 + l;
        }
        return res;
    }
    
    static toHex(data: Uint8Array): string {
        let hex = "";
        for (let i = 0; i < data.length; i++) {
            hex += HexHelper.BYTE_TO_HEX_MAP[data[i]];
        }
        return hex;
    }
}