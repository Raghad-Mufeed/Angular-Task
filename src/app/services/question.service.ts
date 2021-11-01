import { Injectable } from '@angular/core';
import { QuestionWriteDTO, QuestionReadDTO } from '../models/question.model';
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

  getQuestions(categoryId: number): Observable<QuestionReadDTO[]> {
    const url = this.questions_url + "?categoryId=" + categoryId;
    return this.http.get<QuestionReadDTO[]>(url);
  }

  getQuestion(questionId: number): Observable<QuestionReadDTO> {
    const url = this.questions_url + questionId;
    return this.http.get<QuestionReadDTO>(url);
  }

  addQuestion(questionDTO: QuestionWriteDTO): Observable<QuestionReadDTO> {
    return this.http.post<QuestionReadDTO>(this.questions_url, questionDTO);
  }

  updateQuestion(questionDTO: QuestionWriteDTO): Observable<QuestionReadDTO> {
    return this.http.put<QuestionReadDTO>(this.questions_url, questionDTO);
  }

  deleteQuestion(questionId: number): Observable<string> {
    const url = this.questions_url + questionId;
    return this.http.delete<string>(url);
  }
}
