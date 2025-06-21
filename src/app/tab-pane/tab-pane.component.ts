import { AfterViewInit, Component, contentChildren, ElementRef, NgModule, viewChild, ViewChild } from '@angular/core';
import { TabPaneModule } from './tab-pane-module';

import { Renderer2 } from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';
<<<<<<< HEAD
=======
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
>>>>>>> 331f9ef (feat:SideNav - Implement colouring logic)

@Component({
  selector: 'app-tab-pane',
  standalone: true,
<<<<<<< HEAD
  imports: [TabPaneModule],
  templateUrl: './tab-pane.component.html',
  styleUrl: './tab-pane.component.scss'
})
export class TabPaneComponent {}
=======
  imports: [TabPaneModule, RouterOutlet, 
    RouterModule, CommonModule, NgClass],
  templateUrl: './tab-pane.component.html',
  styleUrl: './tab-pane.component.scss'
})
export class TabPaneComponent {
  // dashboardLink = document.getElementById('dashboardLink');
  // payslipLink = document.getElementById('payslipLink');
  // leaveLink = document.getElementById('leaveLink');
  
  dashboardLinkClass = true;
  payslipLinkClass = false;
  leaveLinkClass = false;

  constructor(private elementRef: ElementRef) {
    this.setOnDashboardLink();
  }

  resetSelectedItemStyle() {
    this.dashboardLinkClass = false;
    this.payslipLinkClass = false;
    this.leaveLinkClass = false;
  }

  setOnDashboardLink() {
    this.resetSelectedItemStyle();
    this.dashboardLinkClass = true;
  }

  setOnPayslipLink() {
    this.resetSelectedItemStyle();
    this.payslipLinkClass = true;
  }

  setOnLeaveLink() {
    this.resetSelectedItemStyle();
    this.leaveLinkClass = true;
  }

}

>>>>>>> 331f9ef (feat:SideNav - Implement colouring logic)
