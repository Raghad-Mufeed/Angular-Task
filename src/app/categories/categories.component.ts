import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[];

  constructor(
    private categoryService: CategoryService,
    private snackBar: MatSnackBar
  ) {
    this.categories = [];
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (result) => (this.categories = result),
      (error) => this.snackBar.open('No categories found')
    );
  }
}
