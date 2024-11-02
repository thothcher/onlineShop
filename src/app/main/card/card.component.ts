import { Component, Input } from '@angular/core';
import { Product } from '../../product';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() product!: Product


  constructor(private router: Router, private dataService: DataService) { }


  getDetails(cardData: Product) {
    this.router.navigate(['details'], { state: { data: cardData } });
  }

  addToCart(id: string) {
    this.dataService.addToCartServ(id)
  }


}
