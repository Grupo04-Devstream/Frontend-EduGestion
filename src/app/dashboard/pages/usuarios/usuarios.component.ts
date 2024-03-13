import { Component, inject } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';

@Component({
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './usuarios.component.html',
})
export default class UsuariosComponent {
    public usuarioService = inject(UsersService);
    constructor() {
        console.log(this.usuarioService.loading());
    }
}
