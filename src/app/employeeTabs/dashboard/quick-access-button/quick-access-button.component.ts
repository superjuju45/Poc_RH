import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quick-access-button',
  standalone: true,
  imports: [],
  templateUrl: './quick-access-button.component.html',
  styleUrl: './quick-access-button.component.scss'
})
export class QuickAccessButtonComponent {
  @Input() src!: string;
  @Input() text: string | undefined;
}
