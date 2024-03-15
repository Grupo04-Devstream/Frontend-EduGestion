import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './header.component.html',
})
export default class HeaderComponent {
  public menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route.path !== '')
    .filter((route) => !route.path?.includes(':'));

  public estadoHeader = false;
  public darkTheme = true;

  constructor() {}

  handleMenuClick() {
    this.estadoHeader = !this.estadoHeader;
  }

  handleThemeClick() {
    if (!this.darkTheme) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
    this.darkTheme = !this.darkTheme;
  }
}
