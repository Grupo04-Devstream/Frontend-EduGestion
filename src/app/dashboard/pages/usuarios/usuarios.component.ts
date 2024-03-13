import { Component, inject } from "@angular/core";
import { UsersService } from "../../../services/users.service";
import { CommonModule } from "@angular/common";
import { TableComponent } from "./table/table.component";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { UsuarioRequest } from "../../../interfaces/req-response";

@Component({
    standalone: true,
    imports: [CommonModule, TableComponent, ReactiveFormsModule],
    templateUrl: "./usuarios.component.html",
})
export default class UsuariosComponent {
    public usuarioService = inject(UsersService);

    private usuario: UsuarioRequest = {
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        email: "",
        password: "",
        idRol: 0,
    };

    applyForm = new FormGroup({
        nombre: new FormControl(""),
        apellido: new FormControl(""),
        email: new FormControl(""),
        password: new FormControl(""),
        role: new FormControl(""),
        fechaNacimiento: new FormControl(""),
    });

    async submitUser() {
        console.log(this.applyForm.value);
        const userRequest: UsuarioRequest = {
            nombre: this.applyForm.value.nombre ?? "",
            apellido: this.applyForm.value.apellido ?? "",
            email: this.applyForm.value.email ?? "",
            fechaNacimiento: this.applyForm.value.fechaNacimiento ?? "",
            idRol: parseInt(this.applyForm.value.role ?? "") ?? 0,
            password: this.applyForm.value.password ?? "",
        };
        const response = await this.usuarioService.createUser(userRequest);
        console.log(response);
    }

    async handleDeleteUser(id: number) {
        const response = await this.usuarioService.deleteUser(id);
    }
}
