import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/header.component'),
    children: [
      {
        path: 'home',
        title: 'Home',
        loadComponent: () => import('./dashboard/pages/home/home.component'),
      },{
        path: 'usuarios',
        title: 'Crud usuarios',
        loadComponent: () => import('./dashboard/pages/usuarios/usuarios.component'),
      },{
        path: 'departamentos',
        title: 'Crud Departamentos',
        loadComponent: () => import('./dashboard/pages/departamentos/departamentos.component'),
      },{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];
