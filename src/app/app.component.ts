import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  poduct:any;


  constructor(private api:ApiService){

  }


  ngOnInit(): void {
   this.api.get("https://fakestoreapi.com/products").subscribe((result:any)=>{

   this.poduct = result;

   })


  }
}
