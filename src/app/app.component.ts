import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  menuElement: string = 'recipes';

  display(menu: string) {
    this.menuElement = menu;
  }
}
