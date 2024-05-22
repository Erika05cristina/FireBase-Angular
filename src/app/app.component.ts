import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CancionesComponent } from './pages/canciones/canciones.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CancionesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'practica2firebase';
}
