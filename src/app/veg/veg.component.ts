import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veg',
  templateUrl: './veg.component.html',
  styleUrls: ['./veg.component.css']
})
export class VegComponent  {

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
