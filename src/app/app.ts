import { Component, OnInit } from '@angular/core';
import { PicoloList } from './picolo-list/picolo-list';
import { Header } from './header/header';


@Component({
  selector: 'app-root',
  imports: [PicoloList, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})


export class App {
}
