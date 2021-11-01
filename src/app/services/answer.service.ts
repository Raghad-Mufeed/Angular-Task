import { Injectable } from '@angular/core';
import { AnswerWriteDTO, AnswerReadDTO } from '../models/answer.model';
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

  getAnswers(questionId: number): Observable<AnswerReadDTO[]> {
    const url = this.answers_url + "?questionId=" + questionId;
    return this.http.get<AnswerReadDTO[]>(url);
  }

  addAnswer(answerDTO: AnswerWriteDTO): Observable<AnswerReadDTO> {
    return this.http.post<AnswerReadDTO>(this.answers_url, answerDTO);
  }

  updateAnswer(answerDTO: AnswerWriteDTO): Observable<AnswerReadDTO> {
    return this.http.put<AnswerReadDTO>(this.answers_url, answerDTO);
  }

  deleteAnswer(answerId: number): Observable<string> {
    const url = this.answers_url + answerId;
    return this.http.delete<string>(url);
  }
}
