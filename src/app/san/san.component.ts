import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-san',
  templateUrl: './san.component.html',
  styleUrls: ['./san.component.css']
})
export class SanComponent  {

  constructor(private router: Router) { }

  cheese = "http://www.lovethispic.com/uploaded_images/120456-Slice-Of-Cheese-Pizza.jpg";
  veg = "https://cdn-images-1.medium.com/max/1280/1*OnTKHKbdPxTvZcsVff0Q1w.jpeg";
  pepperoni = "https://vignette.wikia.nocookie.net/recipes/images/6/6e/Pepperoni_Pizza.jpg/revision/latest?cb=20150421044114"

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
