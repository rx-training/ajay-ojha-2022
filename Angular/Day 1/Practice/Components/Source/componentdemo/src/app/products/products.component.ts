import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Array<any> = [
    { ProductID: 1, ProductName: 'Radio', CategoryID: 1 },
    { ProductID: 2, ProductName: 'Toy', CategoryID: 1 },
    { ProductID: 3, ProductName: 'Bread', CategoryID: 2 },
    { ProductID: 4, ProductName: 'Juice', CategoryID: 2 },
  ];
  categoryID:any="";
  filteredlist:Array<any>=[];
  constructor(private activeroute:ActivatedRoute) {
    
  
   
  }

  ngOnInit(): void {

    this.activeroute.params.subscribe(p=>{
      this.categoryID=p["id"];
      this.filteredlist= this.products.filter(p=>p.CategoryID==this.categoryID);
     });
  
    
      
    }
  }

