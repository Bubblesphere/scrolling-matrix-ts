import Board from '../../lib/board';
import Character from '../../lib/character';
import CharacterDictionary from '../../lib/character-dictionary';
import { ICharacterArray } from '../../lib/types';
import BitArray from '../../lib/bit-array';
import { CanvaRenderers } from '../../lib/rendering/canva-renderers';
import SideScrollingPanel from '../../lib/panels/side-scrolling-panel';
import { Alphabet } from '../../lib/characterArray/alphabet';


const Smiley: ICharacterArray = [
  new Character(
    ['s', 'S'], 
    new BitArray([0, 0, 1, 1, 1, 1, 1, 0, 0,
                  0, 1, 0, 0, 0, 0, 0, 1, 0,
                  1, 0, 0, 1, 0, 1, 0, 0, 1,
                  1, 0, 0, 0, 0, 0, 0, 0, 1,
                  1, 0, 1, 0, 0, 0, 1, 0, 1,
                  1, 0, 0, 1, 1, 1, 0, 0, 1,
                  0, 1, 0, 0, 0, 0, 0, 1, 0,
                  0, 0, 1, 1, 1, 1, 1, 0, 0]),
    9
  )
];

const board = new Board();
const dictionary = new CharacterDictionary([Alphabet, Smiley]);
board.load("S", dictionary);

const panel = new SideScrollingPanel({
  board: board,
  renderer: new CanvaRenderers.Rect({
    canva: document.getElementById("canva") as HTMLCanvasElement
  })
});

panel.play();