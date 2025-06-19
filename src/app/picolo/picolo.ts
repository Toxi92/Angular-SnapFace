import { Component, OnInit, Input } from '@angular/core';
import { PicoloClass } from '../models/picoloComp';
import { NgStyle } from '@angular/common';


@Component({
  selector: 'app-picolo',
  imports: [NgStyle],
  templateUrl: './picolo.html',
  styleUrl: './picolo.scss',
  standalone: true
})

export class Picolo{
  @Input() InputPicolo!: PicoloClass;

}
