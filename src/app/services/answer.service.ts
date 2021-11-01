import { Injectable } from '@angular/core';
import { AnswerDTO, Answer } from '../models/answer.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_URL } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class AnswerService {
  answers_url: string;

  constructor(private http: HttpClient) {
    this.answers_url = SERVER_URL + 'answers/';
  }

  getAnswers(questionId: number): Observable<Answer[]> {
    const url = this.answers_url + "?questionId=" + questionId;
    return this.http.get<Answer[]>(url);
  }

  addAnswer(answerDTO: AnswerDTO): Observable<Answer> {
    return this.http.post<Answer>(this.answers_url, answerDTO);
  }

  updateAnswer(answerDTO: AnswerDTO): Observable<Answer> {
    return this.http.put<Answer>(this.answers_url, answerDTO);
  }

  deleteAnswer(answerId: number): Observable<string> {
    const url = this.answers_url + answerId;
    return this.http.delete<string>(url);
  }
}
