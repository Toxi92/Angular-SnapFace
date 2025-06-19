export class PicoloClass {

  localisation?: string;

  constructor(
    public title: string,
    public description: string,
    public createdAt: string,
    public snaps: number,
    public imageURL: string,
    public isSnapped: boolean,
    public SnapStatus: string = "Like") {}
    
  onAddSnap() {
    if (this.isSnapped) {
      this.snaps--;
      this.isSnapped = false;
      this.SnapStatus = 'Like';
    } else {
      this.snaps++;
      this.isSnapped = true;
      this.SnapStatus = 'UnLike';
    }
  }

  setLocalisation(localisation: string) {
    this.localisation = localisation;
  }


}

