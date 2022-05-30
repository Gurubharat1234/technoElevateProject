import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { EmployeeDataComponent } from '../employee-data.component';
// import{EmployeeDataComponent} ';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [
    {
      provide: [{STEPPER_GLOBAL_OPTIONS},{CUSTOM_ELEMENTS_SCHEMA}],
      useValue: {showError: true},
    },
  ]
})
export class DashboardComponent implements OnInit {
  
  constructor(private _formBuilder: FormBuilder) { }
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
  
    
  }
  

