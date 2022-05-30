import {     CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminDataModule } from './admin-data/admin-data.module';
import { EmployeeDataModule } from './employee-data/employee-data.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav'
import {  MatListModule } from  '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    // AdminDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AdminDataModule,
    EmployeeDataModule,
    BrowserAnimationsModule,
    // ButtonModule
    // ToastModule,
    // MessageService,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
MatInputModule, 
MatButtonModule,
MatRippleModule,
MatStepperModule,
    // MatStepLabel
  ],
  providers: [
    MatBottomSheet
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  
})
export class AppModule { }
