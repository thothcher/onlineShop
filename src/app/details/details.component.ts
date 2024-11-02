import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  cardData!: Product;

  constructor(private router: Router) { }

  ngOnInit() {
    this.cardData = history.state.data;

    console.log(this.cardData)
  }
}
