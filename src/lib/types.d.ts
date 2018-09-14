import Character from "./character";
import { bit } from "./bit-array";

export type AlphabetJSONSchema = {
    height: number,
    characters: Array<{
        patterns: Array<string>,
        output: Array<number>,
        width: number
    }>
}

export type Alphabet = { 
    height: number, 
    characters: Array<Character> 
};

export type PanelDisplay = Array<Array<bit>>;
export type PanelRenderer = (display: PanelDisplay, ...other: any[]) => any

export type DetailedPadding = [number, number, number, number];
export type Padding = DetailedPadding | [number, number] | [number];