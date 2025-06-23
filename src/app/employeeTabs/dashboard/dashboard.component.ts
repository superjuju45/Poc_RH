import { Component } from '@angular/core';
import { NewsWindowComponent } from './news-window/news-window.component';
import { LeaveWidgetComponent } from './leave-widget/leave-widget.component';
import { QuickAccessButtonComponent } from './quick-access-button/quick-access-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NewsWindowComponent, LeaveWidgetComponent, QuickAccessButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
    constructor(private router: Router) {}
  
    accessLeave() {
        this.router.navigateByUrl('/leave');
    }
}
