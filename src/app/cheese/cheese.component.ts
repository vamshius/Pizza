import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-cheese',
  templateUrl: './cheese.component.html',
  styleUrls: ['./cheese.component.css']
})
export class CheeseComponent implements OnInit {

  constructor(private router: Router) { }
  toCart(){
     this.router.navigate(['/cart']);
    
  }
  addT(){
    alert("Tomato Sauce Added")
  }
  addC(){
    alert("Extra Cheese Added")
  }
  
  addG(){
    alert("Green Bell Pepper Added")
  }
  ngOnInit() {
  }

}
