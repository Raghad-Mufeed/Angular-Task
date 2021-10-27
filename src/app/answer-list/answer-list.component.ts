import { Component, OnInit } from '@angular/core';
import {
  DTOQuestion,
  DTOAnswer,
} from '../models/category_question_answer.model';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute } from '@angular/router';
import {
  faThumbsUp,
  faThumbsDown,
  faTrashAlt,
} from '@fortawesome/free-regular-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css'],
})
export class AnswerListComponent implements OnInit {
  question: DTOQuestion;
  answer: DTOAnswer;
  answers: DTOAnswer[];
  isModalOpened: boolean;
  modalData: string;
  modalTitle: string;
  modalButtonLabel: string;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faTrashAlt = faTrashAlt;
  faPen = faPen;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private snackBar: MatSnackBar
  ) {
    this.question = { likeCount: 0, dislikeCount: 0, text: '', categoryId: 0 };
    this.answer = { likeCount: 0, dislikeCount: 0, text: '', questionId: 0 };
    this.answers = [];
    this.isModalOpened = false;
    this.modalData = '';
    this.modalTitle = '';
    this.modalButtonLabel = '';
  }

  ngOnInit(): void {
    const categoryId = Number(
      this.activatedRoute.snapshot.queryParamMap.get('categoryId')
    );
    const questionId = Number(
      this.activatedRoute.snapshot.queryParamMap.get('questionId')
    );
    this.categoryService.getQuestion(categoryId, questionId).subscribe(
      (result) => (this.question = result),
      (error) => this.snackBar.open('No answers found')
    );
    this.categoryService.getAnswers(categoryId, questionId).subscribe(
      (result) => (this.answers = result),
      (error) => this.snackBar.open('No answers found')
    );
  }

  openEditAnswerModal(answer: DTOAnswer): void {
    this.answer = answer;
    this.modalData = answer.text;
    this.modalTitle = 'Edit Answer';
    this.modalButtonLabel = 'Edit';
    this.isModalOpened = true;
  }

  submitEditAnswerModal(text: string): void {
    const categoryId = Number(
      this.activatedRoute.snapshot.queryParamMap.get('categoryId')
    );
    const questionId = Number(
      this.activatedRoute.snapshot.queryParamMap.get('questionId')
    );
    this.answer.text = text;
    this.categoryService
      .updateAnswer(categoryId, questionId, {
        id: this.answer.id,
        likeCount: this.answer.likeCount,
        dislikeCount: this.answer.dislikeCount,
        text: text,
        questionId: questionId,
      })
      .subscribe(
        (result) => (this.answers = result),
        (error) => console.log(error)
      );
  }

  likeAnswer(answer: DTOAnswer): void {
    const categoryId = Number(
      this.activatedRoute.snapshot.queryParamMap.get('categoryId')
    );
    const questionId = Number(
      this.activatedRoute.snapshot.queryParamMap.get('questionId')
    );
    this.categoryService
      .updateAnswer(categoryId, questionId, {
        id: answer.id,
        likeCount: answer.likeCount + 1,
        dislikeCount: answer.dislikeCount,
        text: answer.text,
        questionId: questionId,
      })
      .subscribe(
        (result) => (this.answers = result),
        (error) => console.log(error)
      );
  }

  dislikeAnswer(answer: DTOAnswer): void {
    const categoryId = Number(
      this.activatedRoute.snapshot.queryParamMap.get('categoryId')
    );
    const questionId = Number(
      this.activatedRoute.snapshot.queryParamMap.get('questionId')
    );
    this.categoryService
      .updateAnswer(categoryId, questionId, {
        id: answer.id,
        likeCount: answer.likeCount,
        dislikeCount: answer.dislikeCount + 1,
        text: answer.text,
        questionId: questionId,
      })
      .subscribe(
        (result) => (this.answers = result),
        (error) => console.log(error)
      );
  }

  deleteAnswer(answerId: number): void {
    const categoryId = Number(
      this.activatedRoute.snapshot.queryParamMap.get('categoryId')
    );
    const questionId = Number(
      this.activatedRoute.snapshot.queryParamMap.get('questionId')
    );
    this.categoryService
      .deleteAnswer(categoryId, questionId, answerId)
      .subscribe(
        (result) => (this.answers = result),
        (error) => console.log(error)
      );
  }

  openAddAnswerModal(): void {
    this.modalData = '';
    this.isModalOpened = true;
    this.modalTitle = 'New Answer';
    this.modalButtonLabel = 'Add';
  }

  closeModal(): void {
    this.isModalOpened = false;
  }

  submitAddAnswerModal(text: string): void {
    const categoryId = Number(
      this.activatedRoute.snapshot.queryParamMap.get('categoryId')
    );
    const questionId = Number(
      this.activatedRoute.snapshot.queryParamMap.get('questionId')
    );
    this.categoryService
      .addAnswer(categoryId, questionId, {
        likeCount: 0,
        dislikeCount: 0,
        text: text,
        questionId: questionId,
      })
      .subscribe(
        (result) => (this.answers = result),
        (error) => console.log(error)
      );
  }
}
