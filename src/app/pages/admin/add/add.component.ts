import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  url = null;
  
  constructor(){}

  ngOnInit(): void {
  }


  onselectFile(event : any){
    if(event.target.files[0]){
      const file = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event:any) =>{
        this.url = event.target.result;
      }
    }

  }

}
