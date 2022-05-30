import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDataComponent } from './admin-data.component';
import { MentorComponent } from './mentor/mentor.component';
import { NavComponent } from './nav/nav.component';
import { RequestComponent } from './request/request.component';

const routes: Routes = [
  { path: 'adminsData', component: AdminDataComponent },
{path:'nav', component:NavComponent},
{path:'mentor', component:MentorComponent},
{path:'request', component:RequestComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDataRoutingModule { }
