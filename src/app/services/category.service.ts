import { Injectable } from '@angular/core';
import {
  Category,
  DTOQuestion,
  DTOAnswer,
} from '../models/category_question_answer.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { server_url } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories_url: string;

  constructor(private http: HttpClient) {
    this.categories_url = server_url + 'categories/';
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categories_url);
  }

  getCategory(categoryId: number): Observable<Category> {
    const category_url = server_url + 'categories/' + categoryId;
    return this.http.get<Category>(category_url);
  }

  getQuestions(categoryId: number): Observable<DTOQuestion[]> {
    const questions_url =
      server_url + 'categories/' + categoryId + '/questions';
    return this.http.get<DTOQuestion[]>(questions_url);
  }

  getQuestion(categoryId: number, questionId: number): Observable<DTOQuestion> {
    const question_url =
      server_url + 'categories/' + categoryId + '/questions/' + questionId;
    return this.http.get<DTOQuestion>(question_url);
  }

  getAnswers(categoryId: number, questionId: number): Observable<DTOAnswer[]> {
    const answers_url =
      server_url +
      'categories/' +
      categoryId +
      '/questions/' +
      questionId +
      '/answers';
    return this.http.get<DTOAnswer[]>(answers_url);
  }

  addQuestion(
    categoryId: number,
    dtoQuestion: DTOQuestion
  ): Observable<DTOQuestion[]> {
    const questions_url = this.categories_url + categoryId + '/questions';
    return this.http.post<DTOQuestion[]>(questions_url, dtoQuestion);
  }

  addAnswer(
    categoryId: number,
    questionId: number,
    dtoAnswer: DTOAnswer
  ): Observable<DTOAnswer[]> {
    const answers_url =
      this.categories_url +
      categoryId +
      '/questions/' +
      questionId +
      '/answers';
    return this.http.post<DTOAnswer[]>(answers_url, dtoAnswer);
  }

  updateQuestion(
    categoryId: number,
    dtoQuestion: DTOQuestion
  ): Observable<DTOQuestion[]> {
    const questions_url = this.categories_url + categoryId + '/questions';
    return this.http.put<DTOQuestion[]>(questions_url, dtoQuestion);
  }

  updateAnswer(
    categoryId: number,
    questionId: number,
    dtoAnswer: DTOAnswer
  ): Observable<DTOAnswer[]> {
    const answers_url =
      this.categories_url +
      categoryId +
      '/questions/' +
      questionId +
      '/answers';
    return this.http.put<DTOAnswer[]>(answers_url, dtoAnswer);
  }

  deleteQuestion(
    categoryId: number,
    questionId: number
  ): Observable<DTOQuestion[]> {
    const question_url =
      this.categories_url + categoryId + '/questions/' + questionId;
    return this.http.delete<DTOQuestion[]>(question_url);
  }

  deleteAnswer(
    categoryId: number,
    questionId: number,
    answerId: number
  ): Observable<DTOAnswer[]> {
    const answer_url =
      this.categories_url +
      categoryId +
      '/questions/' +
      questionId +
      '/answers/' +
      answerId;
    return this.http.delete<DTOAnswer[]>(answer_url);
  }
}
