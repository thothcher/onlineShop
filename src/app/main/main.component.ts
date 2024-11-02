import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Product } from '../product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardComponent,FormsModule, CommonModule, MatSliderModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];

  searchQuery = '';
  selectedBrand = ''; // Use brand instead of category
  priceRange = { min: 0, max: 1000 };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.products = data.products
      console.log(data.products)
      this.filteredProducts = data.products
    });
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter((product) =>
      product.title.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
      (this.selectedBrand ? product.brand === this.selectedBrand : true) &&
      product.price.current >= this.priceRange.min &&
      product.price.current <= this.priceRange.max
    );
  }

  getUniqueBrands(): string[] {
    return [...new Set(this.products.map(product => product.brand))];
  }
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
