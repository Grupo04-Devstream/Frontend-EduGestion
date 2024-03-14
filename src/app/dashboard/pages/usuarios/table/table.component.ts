import { Component, Input } from "@angular/core";
import { UsuariosResponse } from "../../../../interfaces/req-response";
import { Router } from "@angular/router";

@Component({
    selector: "app-table",
    standalone: true,
    imports: [],
    templateUrl: "./table.component.html",
})
export class TableComponent {
    @Input() data: UsuariosResponse[] = [];
    @Input() handleDeleteUser: (id: number) => void = () => {};

    constructor(private router: Router) {}

    handleEditUser(id: number) {
        this.router.navigate(["dashboard/usuario", id]);
    }
}
