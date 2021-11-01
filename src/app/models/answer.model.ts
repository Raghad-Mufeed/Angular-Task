import { Question } from './question.model';

export interface Answer {
  id: number;
  likeCount: number;
  dislikeCount: number;
  text: string;
  question: Question;
} 

export interface AnswerDTO {
  id: number;
  likeCount: number;
  dislikeCount: number;
  text: string;
  questionId: number;
}





