import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-home-v1',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './home-v1.component.html',
  styleUrl: './home-v1.component.scss'
})
export class HomeV1Component {

}
