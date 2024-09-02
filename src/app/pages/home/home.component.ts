import { Component } from '@angular/core';

import { TitleComponent } from "../../component/title/title.component";
import { BigCardComponent } from "../../component/big-card/big-card.component";
import { SmallCardComponent } from "../../component/small-card/small-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TitleComponent,
    BigCardComponent,
    SmallCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
