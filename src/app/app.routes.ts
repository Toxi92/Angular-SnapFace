import { Routes } from '@angular/router';
import { PicoloList } from './picolo-list/picolo-list';
import { LandingPage } from './landing-page/landing-page';

export const routes: Routes = [
  { path: 'picolos', component: PicoloList },
  { path: '', component: LandingPage}
];
