import { Component,OnInit } from '@angular/core';
import {  ServiceService} from "../service.service";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  users:any;
  constructor( private S:ServiceService){
    
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.S.getall().subscribe((data)=>{
      this.users=data;
      console.log(this.users);
      
    })
  }

}
