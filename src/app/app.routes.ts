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
<<<<<<< HEAD
=======
      },{
        path: 'niveles',
        title: 'Crud niveles',
        loadComponent: () => import('./dashboard/pages/niveles/niveles.component'),
>>>>>>> c3141411e36ba7b421f4beaefca95c856684483a
      },{
        path: 'usuario/:id',
        title: 'Usuario',
        loadComponent: () => import('./dashboard/pages/usuario/usuario.component'),
      },{
        path: 'departamentos',
        title: 'Crud Departamentos',
        loadComponent: () => import('./dashboard/pages/departamentos/departamentos.component'),
      },{
        path: 'niveles',
        title: 'Crud Niveles',
        loadComponent: () => import('./dashboard/pages/niveles/niveles.component'),
      },
      
      
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      }

    ],
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];
