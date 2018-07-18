import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-pepperoni',
  templateUrl: './pepperoni.component.html',
  styleUrls: ['./pepperoni.component.css']
})
export class PepperoniComponent  {

  constructor(private router: Router) { }
  toCart(){
     this.router.navigate(['/cart']);
    
  }
  addM(){
    alert("Mushrooms Added")
  }
  addO(){
    alert("Onions Added")
  }
  addT(){
    alert("Tomatoes Added")
  }
  addG(){
    alert("Green Bell Pepper Added")
  }

}
