import {  CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatStepperModule} from '@angular/material/stepper';
import { EmployeeDataRoutingModule } from './employee-data-routing.module';
import { EmployeeDataComponent } from './employee-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { MatLabel } from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    EmployeeDataComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    EmployeeDataRoutingModule,
   
    FormsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    // MatLabel,
    MatStepperModule,
   MatDialogModule,
   MatSidenavModule,
   MatListModule,
   MatDialogModule,
   MatBottomSheetModule
   
  ],
  providers:[
MatBottomSheet
  ],
  
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  
})
export class EmployeeDataModule { }
