import { Component, OnInit } from '@angular/core';
import { Picolo } from './picolo/picolo';
import { PicoloClass } from './models/picoloComp';


@Component({
  selector: 'app-root',
  imports: [Picolo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  MyPicolo!: PicoloClass;
  MyPicolo2!: PicoloClass;

  ngOnInit() {
    this.MyPicolo = new PicoloClass('Pigeon', 'Une photo de pigeon', new Date(), 0, 'https://lemagdesanimaux.ouest-france.fr/images/tags/pigeon-192350.jpg', false, 'Oh Snap!');
    this.MyPicolo2 = new PicoloClass('Piccolo', 'Une photo de piccolo', new Date(), 0, 'https://www.fulguropop.com/wp-content/uploads/2021/10/piccolo-namek.png', false, 'Oh Snap!');
    this.MyPicolo.setLocalisation('Paris');
  }
}
