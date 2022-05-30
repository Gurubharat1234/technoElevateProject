import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-data',
  templateUrl: './admin-data.component.html',
  styleUrls: ['./admin-data.component.css']
})
export class AdminDataComponent implements OnInit {
 
  constructor(private bt:Router) { }
  datatoggle=true
  mentorsData=false
  navDatadeta=false
  requestData=false
  ngOnInit(): void {
    console.log('bharat');
    
  }
  
  mentorsDatarender(){
this.mentorsData=true
this.navDatadeta=false
this.requestData=false
  }
navData(){
this.mentorsData=false
this.navDatadeta=true
this.requestData=false
}
requestDatadetails(){
  this.requestData=true
  this.mentorsData=false
this.navDatadeta=false
}
}
