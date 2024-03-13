import { Component, Input } from "@angular/core";
import { UsuariosResponse } from "../../../../interfaces/req-response";

@Component({
    selector: "app-table",
    standalone: true,
    imports: [],
    templateUrl: "./table.component.html",
})
export class TableComponent {
    @Input() data: UsuariosResponse[] = [];
    @Input() handleDeleteUser: (id: number) => void = () => {};

    handleEditUser(id: number) {
        alert("Usuario editado: Coming soon...");
    }
}
