import { Component, OnInit, Input } from '@angular/core';
import { PicoloClass } from '../models/picoloComp';


@Component({
  selector: 'app-picolo',
  imports: [],
  templateUrl: './picolo.html',
  styleUrl: './picolo.scss',
  standalone: true
})

export class Picolo{
  @Input() InputPicolo!: PicoloClass;

}
