import { Component, OnInit } from '@angular/core';
import { NewServiceService } from '../SHerd/new-service.service';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.scss']
})
export class NewcompComponent {
  ngOnInit() {
  }
  // title = 'SetTable';
  allCategories:any=[];
  constructor(public tableService:NewServiceService){

this.tableService.getCategories().subscribe(res=>{
this.allCategories=res;
});
   
  }
}
