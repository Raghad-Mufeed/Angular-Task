import { Question } from './question.model';

export interface IAnswer {
  id: number;
  likeCount: number;
  dislikeCount: number;
  text: string;
  question: Question;
}

export class Answer implements IAnswer {
  id: number;
  likeCount: number;
  dislikeCount: number;
  text: string;
  question: Question;

  constructor() {}

  fromDto(answerReadDTO: AnswerReadDTO): Answer {
    this.id = answerReadDTO.id;
    this.likeCount = answerReadDTO.likeCount;
    this.dislikeCount = answerReadDTO.dislikeCount;
    this.text = answerReadDTO.text;
    this.question = answerReadDTO.question;
    return this;
  }

  toDTO(): AnswerWriteDTO {
    return {id: this.id, likeCount: this.likeCount , dislikeCount: this.dislikeCount, 
      text: this.text, questionId: this.question.id};
  }
}

export interface AnswerWriteDTO {
  id: number;
  likeCount: number;
  dislikeCount: number;
  text: string;
  questionId: number;
}

export interface AnswerReadDTO {
  id: number;
  likeCount: number;
  dislikeCount: number;
  text: string;
  question: Question;
}

