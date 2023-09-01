import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from '../add/add.component';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor(private dialogRef: MatDialog){}


  openAddForm = ()=>{
    this.dialogRef.open(AddComponent,{})
  }
}
