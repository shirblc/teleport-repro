import { Component } from '@angular/core';
import { TeleportDirective } from "@ngneat/overview";

@Component({
  selector: 'app-teleported',
  standalone: true,
  imports: [TeleportDirective],
  templateUrl: './teleported.component.html',
  styleUrl: './teleported.component.css'
})
export class TeleportedComponent {

}
