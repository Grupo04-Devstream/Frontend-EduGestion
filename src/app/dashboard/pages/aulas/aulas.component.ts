import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { routes } from '../../../app.routes';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

@Component({
  selector: 'app-aulas',
  standalone: true,
  imports: [RouterOutlet, SidemenuComponent],
  templateUrl: './aulas.component.html',
  styleUrl: './aulas.component.css'
})
export default class AulasComponent {
  // public menuItems = routes
  //   .map((route) => route.children ?? [])
  //   .flat()
  //   .filter((route) => route.path !== '')
  //   .filter((route) => !route.path?.includes(':'));

  constructor() {
    const dashboardRoutes = routes
      .map(route => route.children ?? [])
      .flat()
      .filter(route => route && route.path)
      .filter(route => !route.path?.includes(':'))
    console.log(dashboardRoutes)
  }
}
