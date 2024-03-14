import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UsersService } from "../../../services/users.service";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { UsuarioRequest, UsuariosResponse } from "../../../interfaces/req-response";

@Component({
    selector: "app-usuario",
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: "./usuario.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsuarioComponent {
    private route = inject(ActivatedRoute);
    public usuarioService = inject(UsersService);
    public id: string | number = "";

    applyForm = new FormGroup({
        nombre: new FormControl(""),
        apellido: new FormControl(""),
        email: new FormControl(""),
        password: new FormControl(""),
        role: new FormControl(""),
        fechaNacimiento: new FormControl(""),
    });

    constructor(private router: Router) {
        this.route.params.subscribe((params) => {
            this.id = params["id"];
        });
        this.getUserById();
    }

    async getUserById() {
        const response = await this.usuarioService.getUserById(this.id);
        this.applyForm.setValue({
            nombre: response.nombre,
            apellido: response.apellido,
            email: response.email,
            password: response.password,
            role: response.idRol.id.toString(),
            fechaNacimiento: response.fechaNacimiento,
        });
    }

    updateUser() {
        const userRequest: UsuarioRequest = {
            nombre: this.applyForm.value.nombre ?? "",
            apellido: this.applyForm.value.apellido ?? "",
            email: this.applyForm.value.email ?? "",
            fechaNacimiento: this.applyForm.value.fechaNacimiento ?? "",
            idRol: parseInt(this.applyForm.value.role ?? "") ?? 0,
            password: this.applyForm.value.password ?? "",
        };
        this.usuarioService.updateUser(this.id, userRequest);
        this.router.navigate(["dashboard/usuarios"]);
    }
}
