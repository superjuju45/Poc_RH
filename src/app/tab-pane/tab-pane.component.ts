import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { TabPaneModule } from './tab-pane-module';

import { Renderer2 } from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-tab-pane',
  standalone: true,
  imports: [TabPaneModule],
  templateUrl: './tab-pane.component.html',
  styleUrl: './tab-pane.component.scss'
})
export class TabPaneComponent implements AfterViewInit {

  constructor(private renderer: Renderer2) {}

  @ViewChild('sidenav')
  sidenav!: MatSidenav

  ngAfterViewInit() {
      this.renderer.setStyle(this.sidenav._content.nativeElement,  'scrollbar-width', 'none');
  }
}