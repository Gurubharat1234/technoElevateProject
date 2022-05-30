import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorDataComponent } from './mentor-data.component';

const routes: Routes = [{ path: 'mentorData', component: MentorDataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorDataRoutingModule { }
