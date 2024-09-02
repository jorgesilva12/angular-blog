import { Component } from '@angular/core';

import { HomeComponent } from "./pages/home/home.component";
import { MenuComponent } from "./component/menu/menu.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    MenuComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
],
  // templateUrl: './pages/home/home.component.html',
  // styleUrl: './pages/home/home.component.css'
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
