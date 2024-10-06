import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TeleportOutletDirective } from '@ngneat/overview';
import { TeleportedComponent } from './teleported/teleported.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TeleportOutletDirective, TeleportedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-teleport';
}
