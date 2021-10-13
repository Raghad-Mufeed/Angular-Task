import { Injectable } from '@angular/core';
import { CATEGORIES } from '../models/mock-data';
import { Question, Answer } from '../models/category_question_answer.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}

  getCategories() {
    return CATEGORIES;
  }

  addQuestion(categoryId: number, question: Question): void {
    const category = CATEGORIES.find((category) => category.id === categoryId);
    if (category) {
      category.questions.push(question);
    }
  }

  addAnswer(categoryId: number, questionId: number, answer: Answer): void {
    const category = CATEGORIES.find((category) => category.id === categoryId);
    if (category) {
      const question = category.questions.find(
        (question) => question.id === questionId
      );
      if (question) {
        question.answers.push(answer);
      }
    }
  }

  updateQuestion(
    categoryId: number,
    questionId: number,
    question: Question
  ): void {
    const category = CATEGORIES.find((category) => category.id === categoryId);
    if (category) {
      const toReplaceIndex = category.questions.findIndex(
        (question) => question.id === questionId
      );
      if (toReplaceIndex !== -1) {
        category.questions.splice(toReplaceIndex, 1, question);
      }
    }
  }

  updateAnswer(
    categoryId: number,
    questionId: number,
    answerId: number,
    answer: Answer
  ): void {
    const category = CATEGORIES.find((category) => category.id === categoryId);
    if (category) {
      const question = category.questions.find(
        (question) => question.id === questionId
      );
      if (question) {
        const toReplaceIndex = question.answers.findIndex(
          (answer) => answer.id === answerId
        );
        if (toReplaceIndex !== -1) {
          question.answers.splice(toReplaceIndex, 1, answer);
        }
      }
    }
  }

  deleteQuestion(categoryId: number, questionId: number): void {
    const category = CATEGORIES.find((category) => category.id === categoryId);
    if (category) {
      category.questions = category.questions.filter(
        (question) => question.id !== questionId
      );
    }
  }

  deleteAnswer(categoryId: number, questionId: number, answerId: number): void {
    const category = CATEGORIES.find((category) => category.id === categoryId);
    if (category) {
      const question = category.questions.find(
        (question) => question.id === questionId
      );
      if (question) {
        question.answers = question.answers.filter(
          (answer) => answer.id !== answerId
        );
      }
    }
  }
}
