import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent {

  constructor(private router: Router) { }

  cheese = "https://boofpizzaanddonair.com/img/cdn/533_cfe707e3f31af4ef8ab552e1fecd0cc5.jpg";
  veg = "https://www.dominos.co.in/files/items/Farmhouse.jpg";
  pepperoni = "https://cdn.nexternal.com/cincyfav3/images/larosas_pepperoni_pizzas1.jpg"

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
