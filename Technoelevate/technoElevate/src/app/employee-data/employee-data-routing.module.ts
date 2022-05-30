import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDataComponent } from './employee-data.component';

const routes: Routes = [{ path: 'employeesData', component: EmployeeDataComponent },
{path:'dashBoard', component:DashboardComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDataRoutingModule { }
