import { Component, OnInit } from '@angular/core';
import { Picolo } from './../picolo/picolo';
import { PicolosService } from '../services/picolos-service';
import { PicoloClass } from '../models/picoloComp';



@Component({
  selector: 'app-picolo-list',
  imports: [Picolo],
  templateUrl: './picolo-list.html',
  styleUrl: './picolo-list.scss'
})
export class PicoloList implements OnInit {
  lesPicolos!: PicoloClass[];

  constructor(private picolosService: PicolosService) {}
  ngOnInit() {
    this.lesPicolos = this.picolosService.getPicolos();
  }
}
