import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorDataRoutingModule } from './mentor-data-routing.module';
import { MentorDataComponent } from './mentor-data.component';


@NgModule({
  declarations: [
    MentorDataComponent
  ],
  imports: [
    CommonModule,
    MentorDataRoutingModule
  ]
})
export class MentorDataModule { }
