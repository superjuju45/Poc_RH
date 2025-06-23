import { Component } from '@angular/core';
import { TabPaneModule } from './tab-pane-module';


import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-tab-pane',
  standalone: true,
  imports: [TabPaneModule, RouterOutlet, 
    RouterModule, CommonModule, NgClass],
  templateUrl: './tab-pane.component.html',
  styleUrl: './tab-pane.component.scss'
})
export class TabPaneComponent {
  dashboardLinkClass = false;
  payslipLinkClass = false;
  leaveLinkClass = false;

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

