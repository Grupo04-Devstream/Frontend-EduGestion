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
        "Aco Tito, Anthony Edwin",
        "Hilario Soto, Jheisson Rudy",
        "Lavado Torres, Gianmarco Gabriel",
        "Mondalgo Tapia, Juan Carlos",
    ];
}
