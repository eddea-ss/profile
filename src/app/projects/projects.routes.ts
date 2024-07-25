import { Routes, RouterModule } from '@angular/router';
import { HomeV1Component } from './home-v1/home-v1.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';

export const PROJECTS_ROUTES: Routes = [
  { path: 'v2',component: NavbarComponent },
  {
    path: '**',
    component: NotfoundComponent
  }
];