import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav'
import { AdminDataRoutingModule } from './admin-data-routing.module';
import { AdminDataComponent } from './admin-data.component';
import { NavComponent } from './nav/nav.component';
import { MentorComponent } from './mentor/mentor.component';
import { RequestComponent } from './request/request.component';
import { MatListModule } from  '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalComponentComponent } from './modal-component/modal-component.component';
import { MentorModalComponent } from './mentor-modal/mentor-modal.component';


@NgModule({
  declarations: [
    AdminDataComponent,
    NavComponent,
    MentorComponent,
    RequestComponent,
    ModalComponentComponent,
    MentorModalComponent
  ],
  imports: [
    CommonModule,
    AdminDataRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule
  ]
})
export class AdminDataModule { }
