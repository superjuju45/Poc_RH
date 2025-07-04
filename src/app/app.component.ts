import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TabPaneComponent } from './tab-pane/tab-pane.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TabPaneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
