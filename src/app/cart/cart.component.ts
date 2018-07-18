import { Component, OnInit } from '@angular/core';
import{Router} from "@angular/router"

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private router:Router) { }

  
  onSubmit(){
   this.router.navigate(["/thanks"])
  }
  more(){
    this.router.navigate(["/veg"])
  }
}
