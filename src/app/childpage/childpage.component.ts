import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-childpage',
  templateUrl: './childpage.component.html',
  styleUrls: ['./childpage.component.css']
})
export class ChildpageComponent {
  productData;
  id;
  constructor(private router:ActivatedRoute,private ProductService:ProductService) {
    this.router.params.subscribe((productId)=>{
      this.id=productId.id;
    }
    )
    console.log(this.id);
    this.ProductService.show(this.id).subscribe((data)=>{
      this.productData=data;
      console.log(data);
     },
     (err) => {
       alert("404 Not Found!!");
     },
     () => {
     }
     )
   }
   
  }
   

 
