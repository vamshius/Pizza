import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-newyork',
  templateUrl: './newyork.component.html',
  styleUrls: ['./newyork.component.css']
})
export class NewyorkComponent  {

  

  constructor(private router: Router) { }

  cheese = "http://www.pomodorospizzas.com/wp-content/uploads/2016/07/cheese_pizza.jpg";
  veg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQodalA8yqmjRwmyvl9f9tI5ELmGawcv4BPLqD52wt94XebTw91qg";
  pepperoni = "https://www.thebittersideofsweet.com/wp-content/uploads/2018/04/Puff-Pastry-Pepperoni-Pizza-Picture.jpg"

  cheeseClick() {
    this.router.navigate(['/cheese']);
  }

  vegClick() {
    this.router.navigate(['/veg']);

  }
  pepperoniClick() {
    this.router.navigate(['/pepperoni']);
  }

}
