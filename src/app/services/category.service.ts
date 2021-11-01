import { Injectable } from '@angular/core';
import { CategoryReadDTO } from '../models/category.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_URL } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories_url: string;

  constructor(private http: HttpClient) {
    this.categories_url = SERVER_URL + 'categories/';
  }

  getCategories(): Observable<CategoryReadDTO[]> {
    return this.http.get<CategoryReadDTO[]>(this.categories_url);
  }

  getCategory(categoryId: number): Observable<CategoryReadDTO> {
    const url = this.categories_url + categoryId;
    return this.http.get<CategoryReadDTO>(url);
  }
}
