import { Component, OnInit } from '@angular/core';
import { Question, Answer } from '../models/category_question_answer.model';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute } from '@angular/router';
import {
  faThumbsUp,
  faThumbsDown,
  faTrashAlt,
} from '@fortawesome/free-regular-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css'],
})
export class AnswerListComponent implements OnInit {
  question: Question;
  answer: Answer;
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
    private categoryService: CategoryService
  ) {
    this.question = new Question('');
    this.answer = new Answer('');
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
    const category = this.categoryService
      .getCategories()
      .find((category) => category.id === categoryId);
    if (category) {
      this.question =
        category.questions.find((question) => question.id === questionId) ||
        this.question;
    }
  }

  openEditAnswerModal(answer: Answer): void {
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
    this.answer.text = text;
    this.categoryService.updateAnswer(
      categoryId,
      this.question.id,
      this.answer.id,
      this.answer
    );
  }

  likeAnswer(answer: Answer): void {
    const categoryId = Number(
      this.activatedRoute.snapshot.queryParamMap.get('categoryId')
    );
    const questionId = Number(
      this.activatedRoute.snapshot.queryParamMap.get('questionId')
    );
    answer.likeCount += 1;
    this.categoryService.updateAnswer(
      categoryId,
      questionId,
      answer.id,
      answer
    );
  }

  dislikeAnswer(answer: Answer): void {
    const categoryId = Number(
      this.activatedRoute.snapshot.queryParamMap.get('categoryId')
    );
    const questionId = Number(
      this.activatedRoute.snapshot.queryParamMap.get('questionId')
    );
    answer.dislikeCount += 1;
    this.categoryService.updateAnswer(
      categoryId,
      questionId,
      answer.id,
      answer
    );
  }

  deleteAnswer(answerId: number): void {
    const categoryId = Number(
      this.activatedRoute.snapshot.queryParamMap.get('categoryId')
    );
    const questionId = Number(
      this.activatedRoute.snapshot.queryParamMap.get('questionId')
    );
    this.categoryService.deleteAnswer(categoryId, questionId, answerId);
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
    this.categoryService.addAnswer(
      categoryId,
      this.question.id,
      new Answer(text)
    );
  }
}
