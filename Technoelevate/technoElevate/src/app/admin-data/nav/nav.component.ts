import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponentComponent } from '../modal-component/modal-component.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  

  constructor(private fb:FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    

  }
  openDialog() {
    const dialogRef = this.dialog.open(ModalComponentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
