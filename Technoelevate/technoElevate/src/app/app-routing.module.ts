import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AdminDataComponent } from './admin-data/admin-data.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'admins', loadChildren: () => import('./admin-data/admin-data.module').then(m => m.AdminDataModule) }, 
  { path: '', loadChildren: () => import('./mentor-data/mentor-data.module').then(m => m.MentorDataModule) }, 
  { path: 'employee', loadChildren: () => import('./employee-data/employee-data.module').then(m => m.EmployeeDataModule) },
{path:'home', component:HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
