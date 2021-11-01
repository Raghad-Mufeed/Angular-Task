import { Injectable } from '@angular/core';
import { QuestionDTO, Question } from '../models/question.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_URL } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  questions_url: string;

  constructor(private http: HttpClient) {
    this.questions_url = SERVER_URL + 'questions/';
  }

  getQuestions(categoryId: number): Observable<Question[]> {
    const url = this.questions_url + "?categoryId=" + categoryId;
    return this.http.get<Question[]>(url);
  }

  getQuestion(questionId: number): Observable<Question> {
    const url = this.questions_url + questionId;
    return this.http.get<Question>(url);
  }

  addQuestion(questionDTO: QuestionDTO): Observable<Question> {
    return this.http.post<Question>(this.questions_url, questionDTO);
  }

  updateQuestion(questionDTO: QuestionDTO): Observable<Question> {
    return this.http.put<Question>(this.questions_url, questionDTO);
  }

  deleteQuestion(questionId: number): Observable<string> {
    const url = this.questions_url + questionId;
    return this.http.delete<string>(url);
  }
}
