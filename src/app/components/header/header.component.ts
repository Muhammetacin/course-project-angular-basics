import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
})

export class HeaderComponent {
    collapsed = true;

    @Output() menuElement = new EventEmitter<string>();

    display(menu: string) {
        this.menuElement.emit(menu);
    }
}