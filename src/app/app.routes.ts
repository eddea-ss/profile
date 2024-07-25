import { Routes } from '@angular/router';
import { HomeV1Component } from './projects/home-v1/home-v1.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
  { path: '', component: HomeV1Component },
  {
    path: '',
    children: [
      {
        path: 'projects',
        loadChildren: () => import('./projects/projects.routes').then(m => m.PROJECTS_ROUTES)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
