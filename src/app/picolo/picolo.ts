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
  
  // Méthodes publiques pour le template
  onLike(): void {
    if (this.InputPicolo && this.InputPicolo.id) {
      this.picolosService.likePicoloByID(this.InputPicolo.id);
    }
  }
  
  onDislike(): void {
    if (this.InputPicolo && this.InputPicolo.id) {
      this.picolosService.likePicoloByID(this.InputPicolo.id); // Utilise la même méthode car onAddSnap() gère le toggle
    }
  }
}
