import { Component, OnInit, Input } from '@angular/core';
import { PicoloClass } from '../models/picoloComp';
import { NgStyle,NgClass, TitleCasePipe } from '@angular/common';
import { PicolosService } from '../services/picolos-service';


@Component({
  selector: 'app-picolo',
  imports: [NgStyle, NgClass, TitleCasePipe],
  templateUrl: './picolo.html',
  styleUrl: './picolo.scss',
  standalone: true
})

export class Picolo{
  @Input() InputPicolo!: PicoloClass;
  constructor(private picolosService: PicolosService) {}
  
}
