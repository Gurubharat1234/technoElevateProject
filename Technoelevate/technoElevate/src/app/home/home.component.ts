import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminDataComponent } from '../admin-data/admin-data.component';
import { AdminDataModule } from '../admin-data/admin-data.module';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loinForm;
  Email;
  pwd;
  visitData=true;
  admin=[];
  mentor=[];
  employee=[]

  constructor( private route:Router, private det:AuthService) { }

  ngOnInit(): void {
    //admin
    this.det.getData().subscribe((res)=>{
this.admin=res
console.log(res);
//mentor
this.det.getMentor().subscribe((res)=>{
  this.mentor=res
  //employee
  this.det.getEmployee().subscribe((res)=>{
    this.employee=res
  })
})
    })
  }
  onSubmit(det){
    // console.log(this.loinForm.value);
    // localStorage.setItem('details', JSON.stringify(this.loinForm.value))
    
    let flag = false
this.visitData=true
    
console.log(det);
    this.admin.forEach((res)=> {
      if(res.Email == det.value.Email && res.pwd == det.value.pwd) {
        alert("Admin Logged In Successfully")
        this.visitData=false
        localStorage.setItem("users",JSON.stringify(res))
        flag = true;
        det.reset()
        this.route.navigate(['/adminsData']) 
      } 
     
    })
    
  
    this.mentor.forEach((res)=>{
      if(res.Email == det.value.Email && res.pwd == det.value.pwd){
        alert("mentor Logged In Successfully")
        this.visitData=false
        localStorage.setItem("mentor",JSON.stringify(res))
        flag = true;
        det.reset()
        this.route.navigate(['/mentorData']) 
      } 
    })
    
    this.employee.forEach((res)=>{
      if(res.Email == det.value.Email && res.pwd == det.value.pwd){
        alert("Employee Logged In Successfully")
        this.visitData=false
        localStorage.setItem("employee",JSON.stringify(res))
        flag = true;
        this.visitData=false

        det.reset()
        this.route.navigate(['/employeesData']) 
      } 
    })
    if(!flag) {
      alert("Please verify Id & Password");
      // this.route.navigate([''])
    

    }
      }
  
    
  
 
}
