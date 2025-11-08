import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SHARED_IMPORTS } from './shared/ng-zorro-imports';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SHARED_IMPORTS, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('client');
}
