import { Component, OnInit } from '@angular/core';
import { Category } from '../classes/classes.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }
  
  getCategories(): void {
    this.categories = this.categoryService.getCategories();
  }
}
