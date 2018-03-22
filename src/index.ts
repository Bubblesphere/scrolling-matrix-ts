import Board from './board';
import ScrollingMatrix from './scrolling-matrix';
import Character from './character';
import CharacterDictionary from './character-dictionary';
import BitArray from './bit-array';
import { Alphabet } from './alphabet';

const board = new Board(2);
const dictionary = new CharacterDictionary(Alphabet);

board.load("abcdefghij", dictionary);

const matrix = new ScrollingMatrix(board);
matrix.stepParameters({  
  board: board, 
  callbackDone: (display) => { 
    let output = "";
    for(var i = 0; i < display.length; i++) {
        for(var j = 0; j < display[i].length; j++) {
          output += display[i][j] == 1 ? "X" : " ";
        }
      output += '\n';
    }
    document.getElementById("root").innerHTML = output; 
  }
});

matrix.play();

let arr = new BitArray(12);
arr.push(1);
arr.push(0);
arr.push(1);
arr.push(1);
console.log(arr.atIndex(0));
console.log(arr.atIndex(1));
console.log(arr.atIndex(2));
console.log(arr.atIndex(3));

/*
setTimeout(function(){ matrix.pause() }, 3000);
setTimeout(function(){ matrix.resume() }, 4000);
setTimeout(function(){ matrix.stop() }, 5000);
setTimeout(function(){ matrix.play() }, 6000);
*/