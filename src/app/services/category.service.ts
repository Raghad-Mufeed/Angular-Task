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
    const category = CATEGORIES.find((category) => category.id === categoryId);
    category?.questions.forEach((question, index) => {
      if (question.id === questionId) {
        delete category.questions[index];
      }
    });
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
    const question = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.questions.find((question) => question.id === questionId);
    question?.answers.forEach((answer, index) => {
      if (answer.id === answerId) {
        delete question.answers[index];
      }
    });
  }
}
