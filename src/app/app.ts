import { Component, OnInit } from '@angular/core';
import { Picolo } from './picolo/picolo';
import { PicoloClass } from './models/picoloComp';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [Picolo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})


export class App implements OnInit {

  getFormattedDate(): string {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm') || '';
  }

  lesPicolos!: PicoloClass[];

  ngOnInit() {
    this.lesPicolos = [ 
    new PicoloClass('Pigeon', 'Une photo de pigeon', this.getFormattedDate(), 110, 'https://lemagdesanimaux.ouest-france.fr/images/tags/pigeon-192350.jpg', false),
    new PicoloClass('Piccolo', 'Une photo de piccolo',this.getFormattedDate() , 200, 'https://www.fulguropop.com/wp-content/uploads/2021/10/piccolo-namek.png', false)
    ];
    this.lesPicolos[0].setLocalisation('Chez Zazou PRIME');
  }
}
