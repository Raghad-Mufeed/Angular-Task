import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { QuestionService } from '../services/question.service';
import { Category } from '../models/category.model';
import { Question } from '../models/question.model';
import { MatSnackBar } from '@angular/material/snack-bar';

import {
  faThumbsUp,
  faThumbsDown,
  faTrashAlt,
} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
})
export class QuestionListComponent implements OnInit {
  category: Category;
  questions: Question[];
  isModalOpened: boolean;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faTrashAlt = faTrashAlt;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private questionService: QuestionService,
    private snackBar: MatSnackBar
  ) {
    this.category = {
      id: 0,
      name: '',
      description: '',
      imageURL: '',
      tags: [],
    };
    this.questions = [];
    this.isModalOpened = false;
  }

  ngOnInit(): void {
    const categoryId = Number(
      this.activatedRoute.snapshot.queryParamMap.get('categoryId')
    );
    this.categoryService.getCategory(categoryId).subscribe(
      (result) => (this.category = result),
      (error) => this.snackBar.open('No category found')
    );
    this.questionService.getQuestions(categoryId).subscribe(
      (result) => {
        this.questions = result;
        this.questions.sort(function (a, b) {
          return a.id - b.id;
        });
      },
      (error) => this.snackBar.open('No questions found')
    );
  }

  openAddQuestionModal(): void {
    this.isModalOpened = true;
  }

  closeModal(): void {
    this.isModalOpened = false;
  }

  submitAddQuestionModal(text: string): void {
    this.questionService
      .addQuestion({
        id: 0,
        likeCount: 0,
        dislikeCount: 0,
        text: text,
        categoryId: this.category.id || 0,
      })
      .subscribe(
        (result) => this.questions.push(result),
        (error) => console.log(error)
      );
  }

  likeQuestion(question: Question): void {
    question.likeCount++;
    this.questionService
      .updateQuestion({
        id: question.id || 0,
        likeCount: question.likeCount,
        dislikeCount: question.dislikeCount,
        text: question.text,
        categoryId: this.category.id || 0,
      })
      .subscribe(
        (result) => {},
        (error) => console.log(error)
      );
  }

  dislikeQuestion(question: Question): void {
    question.dislikeCount++;
    this.questionService
      .updateQuestion({
        id: question.id || 0,
        likeCount: question.likeCount,
        dislikeCount: question.dislikeCount,
        text: question.text,
        categoryId: this.category.id || 0,
      })
      .subscribe(
        (result) => {},
        (error) => console.log(error)
      );
  }

  deleteQuestion(questionId: number): void {
    this.questionService.deleteQuestion(questionId || 0).subscribe(
      (result) =>
        this.questions = this.questions.filter((question) => question.id !== questionId),
      (error) => console.log(error)
    );
  }
}
