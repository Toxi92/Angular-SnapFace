export class PicoloClass {

  id:string;
  localisation?: string;
  
  constructor(
    public title: string,
    public description: string,
    public createdAt: string,
    public snaps: number,
    public imageURL: string,
    public isSnapped: boolean,
    public SnapStatus: string = "Like") {
      this.id = crypto.randomUUID().substring(0, 8);
    }
    
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

  withLocation(location: string): PicoloClass {
    this.setLocalisation(location);
    return this;
  }


}

