import { Contacts } from './contacts/contacts';
import { Shop } from './shop/shop';
import { About } from './about/about';
import { Home } from './home/home';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: Home},
  { path: 'about', component: About},
  { path: 'shop', component: Shop},
  { path: 'contacts', component: Contacts}
];
