import { Injectable } from '@angular/core';
import {
  Question,
  Answer,
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

  getQuestions(categoryId: number): Observable<Question[]> {
    const questions_url =
      server_url + 'categories/' + categoryId + '/questions';
    return this.http.get<Question[]>(questions_url);
  }

  getQuestion(categoryId: number, questionId: number): Observable<Question> {
    const question_url =
      server_url + 'categories/' + categoryId + '/questions/' + questionId;
    return this.http.get<Question>(question_url);
  }

  getAnswers(categoryId: number, questionId: number): Observable<Answer[]> {
    const answers_url =
      server_url +
      'categories/' +
      categoryId +
      '/questions/' +
      questionId +
      '/answers';
    return this.http.get<Answer[]>(answers_url);
  }

  addQuestion(
    categoryId: number,
    dtoQuestion: DTOQuestion
  ): Observable<string> {
    const questions_url = this.categories_url + categoryId + '/questions';
    return this.http.post<string>(questions_url, dtoQuestion);
  }

  addAnswer(
    categoryId: number,
    questionId: number,
    dtoAnswer: DTOAnswer
  ): Observable<string> {
    const answers_url =
      this.categories_url +
      categoryId +
      '/questions/' +
      questionId +
      '/answers';
    return this.http.post<string>(answers_url, dtoAnswer);
  }

  updateQuestion(
    categoryId: number,
    dtoQuestion: DTOQuestion
  ): Observable<string> {
    const questions_url = this.categories_url + categoryId + '/questions';
    return this.http.put<string>(questions_url, dtoQuestion);
  }

  updateAnswer(
    categoryId: number,
    questionId: number,
    dtoAnswer: DTOAnswer
  ): Observable<string> {
    const answers_url =
      this.categories_url +
      categoryId +
      '/questions/' +
      questionId +
      '/answers';
    return this.http.put<string>(answers_url, dtoAnswer);
  }

  deleteQuestion(categoryId: number, questionId: number): Observable<string> {
    const question_url =
      this.categories_url + categoryId + '/questions/' + questionId;
      console.log(question_url);
    return this.http.delete<string>(question_url);
  }

  deleteAnswer(
    categoryId: number,
    questionId: number,
    answerId: number
  ): Observable<string> {
    const answer_url =
      this.categories_url +
      categoryId +
      '/questions/' +
      questionId +
      '/answers/' +
      answerId;
    return this.http.delete<string>(answer_url);
  }
}
