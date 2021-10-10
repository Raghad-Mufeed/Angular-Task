import { Injectable } from '@angular/core';
import { CATEGORIES } from '../classes/mock-data';
import { Question, Answer, Category } from '../classes/classes.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  temp: string = '';
  constructor() {}

  getCategories() {
    return CATEGORIES;
  }

  addQuestion(categoryId: number, question: string) {
    CATEGORIES.find((category) => category.id === categoryId)?.questions.push(
      new Question(question)
    );
  }
  addAnswer(
    categoryId: number,
    questionId: number | undefined,
    answer: string
  ): void {
    CATEGORIES.find((category) => category.id === categoryId)
      ?.questions.find((question) => question.id === questionId)
      ?.answers.push(new Answer(answer));
  }
  editAnswer(
    categoryId: number,
    questionId: number | undefined,
    answerId: number | undefined,
    answer: string
  ) {
    const ans = CATEGORIES.find((category) => category.id === categoryId)
      ?.questions.find((question) => question.id === questionId)
      ?.answers.find((answer) => answer.id === answerId);
    if (ans) {
      ans.answer = answer;
    }
  }
  likeQuestion(categoryId: number, questionId: number): void {
    const answer = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.questions.find((question) => question.id === questionId);
    if (answer) {
      answer.likeCount++;
    }
  }
  dislikeQuestion(categoryId: number, questionId: number): void {
    const answer = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.questions.find((question) => question.id === questionId);
    if (answer) {
      answer.dislikeCount++;
    }
  }
  deleteQuestion(categoryId: number, questionId: number): void {
    var category = CATEGORIES.find((category) => category.id === categoryId);
    if (category) {
      category.questions=category.questions.filter((question) => question.id !== questionId);
    }
  }
  likeAnswer(categoryId: number, questionId: number, answerId: number): void {
    const answer = CATEGORIES.find((category) => category.id === categoryId)
      ?.questions.find((question) => question.id === questionId)
      ?.answers.find((answer) => answer.id === answerId);
    if (answer) {
      answer.likeCount++;
    }
  }
  dislikeAnswer(
    categoryId: number,
    questionId: number,
    answerId: number
  ): void {
    const answer = CATEGORIES.find((category) => category.id === categoryId)
      ?.questions.find((question) => question.id === questionId)
      ?.answers.find((answer) => answer.id === answerId);
    if (answer) {
      answer.dislikeCount++;
    }
  }
  deleteAnswer(categoryId: number, questionId: number, answerId: number): void {
    var question = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.questions.find((question) => question.id === questionId);
    if (question) {
      question.answers = question.answers.filter(
        (answer) => answer.id !== answerId
      );
    }
  }
}
