import { bit } from "../bit-array";
import Panel from "../panel";

export default class SideScrollingPanel extends Panel {
  public get indexUpperBound(): number {
    return this.board.width - 1;
  }

  protected _generateDisplay(currentIndex: number): void {
    for(let i = 0; i < this.width; i++) {
      let column: Array<bit>;
      column = this.board.getColumnAtIndex(currentIndex + i);
      
      for(let j = 0; j < this.board.height; j++) {
        this.display[j][i] = column[j];
      }
    }
  }
}