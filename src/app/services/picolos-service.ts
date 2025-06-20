import { Injectable } from '@angular/core';
import { PicoloClass } from '../models/picoloComp';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PicolosService {

  getFormattedDate(): string {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm') || '';
  }

  private picolos: PicoloClass[] = [
    new PicoloClass('Pigeon', 'Une photo de pigeon', this.getFormattedDate(), 110, 'https://lemagdesanimaux.ouest-france.fr/images/tags/pigeon-192350.jpg', false).withLocation('Paris'),
    new PicoloClass('Piccolo', 'Une photo de piccolo',this.getFormattedDate() , 200, 'https://www.fulguropop.com/wp-content/uploads/2021/10/piccolo-namek.png', false)
    ];

    getPicolos(): PicoloClass[] {
      return this.picolos;
    }

    likePicoloByID(id: string): void {
        const picolo = this.picolos.find(p => p.id === id);
        if (picolo) {
            picolo.onAddSnap();
        }else {
            throw new Error('Like with id not found!');
        }
    }
}