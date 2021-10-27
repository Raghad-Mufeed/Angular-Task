import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import {
  Category,
  DTOQuestion,
} from '../models/category_question_answer.model';
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
  questions: DTOQuestion[];
  isModalOpened: boolean;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faTrashAlt = faTrashAlt;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
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
    this.categoryService.getQuestions(categoryId).subscribe(
      (result) => (this.questions = result),
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
    this.categoryService
      .addQuestion(this.category.id || 0, {
        likeCount: 0,
        dislikeCount: 0,
        text: text,
        categoryId: this.category.id || 0,
      })
      .subscribe(
        (result) => (this.questions = result),
        (error) => console.log(error)
      );
  }

  likeQuestion(question: DTOQuestion): void {
    this.categoryService
      .updateQuestion(this.category.id || 0, {
        id: question.id || 0,
        likeCount: question.likeCount + 1,
        dislikeCount: question.dislikeCount,
        text: question.text,
        categoryId: this.category.id || 0,
      })
      .subscribe(
        (result) => (this.questions = result),
        (error) => console.log(error)
      );
  }

  dislikeQuestion(question: DTOQuestion): void {
    this.categoryService
      .updateQuestion(this.category.id || 0, {
        id: question.id || 0,
        likeCount: question.likeCount,
        dislikeCount: question.dislikeCount + 1,
        text: question.text,
        categoryId: this.category.id || 0,
      })
      .subscribe(
        (result) => (this.questions = result),
        (error) => console.log(error)
      );
  }

  deleteQuestion(currentQuestion: DTOQuestion): void {
    this.categoryService
      .deleteQuestion(this.category.id || 0, currentQuestion.id || 0)
      .subscribe(
        (result) => (this.questions = result),
        (error) => console.log(error)
      );
  }
}
