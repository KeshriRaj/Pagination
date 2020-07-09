import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { Observable } from "rxjs";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  count=0;
  productResult: Observable<any>;
  constructor(private productService:ProductService,private router:Router) { 
    this.productResult = this.productService.getService();
    console.log(this.productResult);
  }

  showData(id:String)
  {
    this.productService.show(id).subscribe(
      ()=>{
        alert("Data Fteched Sucessfully");
      },
      (err) =>{
        alert(err);
      },
      ()=>{
        this.router.navigateByUrl('/childpage');
      }
    );

  }
  ngOnInit(): void {
  }
  show=(count)=>{
    if(count<=0)
    alert("Already the first page");
    this.productResult = this.productService.show(count);
    this.count = count;
  }

}
