import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './employeeTabs/dashboard/dashboard.component';
import { PayslipComponent } from './employeeTabs/payslip/payslip.component';
import { LeaveComponent } from './employeeTabs/leave/leave.component';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'payslip', component: PayslipComponent},
    {path: 'leave', component: LeaveComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
