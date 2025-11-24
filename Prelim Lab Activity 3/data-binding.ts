import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})



export class DataBinding {
  //text intervolation
  message = "I love chaewon omayghad"
  title = "My Forever Bias"
  description = "My love for chaewon is infinity itself"

  //property binding
  imageUrl = "https://i.mydramalist.com/BWOe7_5f.jpg";
  w = 400;
  h = 500;
  textColor = "purple";

  isHighlighted = "true";
  yourName = "";

  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}
