import { Injectable } from '@angular/core';
import { CATEGORIES } from '../classes/mock-data';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}

  getCategories() {
    return CATEGORIES;
  }
}
