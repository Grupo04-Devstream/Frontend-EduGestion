import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: "app-home",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./home.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
    public users = [
        {
            apellido: "Aco Tito",
            nombre: "Anthony Edwin",
            icono: "https://github.com/atn25042002.png",
            userName: "atn25042002",
            url: "https://github.com/atn25042002",
        },
        {
            apellido: "Hilario Soto",
            nombre: "Jheisson Rudy",
            icono: "https://github.com/JRhoud.png",
            userName: "JRhoud",
            url: "https://github.com/JRhoud",
        },
        {
            apellido: "Lavado Torres",
            nombre: "Gianmarco Gabriel",
            icono: "https://github.com/SirNaze0.png",
            userName: "SirNaze0",
            url: "https://github.com/SirNaze0",
        },
        {
            apellido: "Mondalgo Tapia",
            nombre: "Juan Carlos",
            icono: "https://github.com/Jmond544.png",
            userName: "Jmond544",
            url: "https://github.com/Jmond544",
        },
    ];
}
