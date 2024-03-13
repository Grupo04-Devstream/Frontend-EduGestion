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
      }, {
        path: 'aulas',
        title: 'Aulas',
        loadComponent: () => import('./dashboard/pages/aulas/aulas.component'),
        children: [{
          path: 'manager',
          title: 'Manager',
          loadComponent: () => import('./dashboard/pages/aulas/manager/manager.component'),
        },
        {
          path: 'add',
          title: 'Add',
          loadComponent: () => import('./dashboard/pages/aulas/add/add.component'),
        },
        {
          path: 'delete',
          title: 'Delete',
          loadComponent: () => import('./dashboard/pages/aulas/delete/delete.component'),
        },
        {
          path: 'find',
          title: 'Find',
          loadComponent: () => import('./dashboard/pages/aulas/find/find.component'),
        },
        {
          path: 'update',
          title: 'Update',
          loadComponent: () => import('./dashboard/pages/aulas/update/update.component'),
        },
        ]
      }, {
        path: 'usuarios',
        title: 'Crud usuarios',
        loadComponent: () => import('./dashboard/pages/usuarios/usuarios.component'),
      },
      {
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
