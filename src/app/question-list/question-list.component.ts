import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category, Question } from '../models/category_question_answer.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  isModalOpened: boolean;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faTrashAlt = faTrashAlt;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private modalService: NgbModal
  ) {
    this.category = new Category('', '', '', []);
    this.isModalOpened = false;
  }

  ngOnInit(): void {
    const categoryId = Number(this.activatedRoute.snapshot.queryParamMap.get('categoryId'));
    this.category = this.categoryService
      .getCategories()
      .find(
        (category) =>
          category.id === categoryId
      ) || this.category;
  }

  openAddQuestionModal(): void {
    this.isModalOpened = true;
  }

  closeModal(): void {
    this.isModalOpened = false;
  }

  addQuestion(text: string): void {
    this.categoryService.addQuestion(
      this.category.id,
      new Question(text)
    );
  }

  likeQuestion(question: Question): void {
    question.likeCount += 1;
    this.categoryService.updateQuestion(
      this.category.id,
      question.id,
      question
    );
  }

  dislikeQuestion(question: Question): void {
    question.dislikeCount += 1;
    this.categoryService.updateQuestion(
      this.category.id,
      question.id,
      question
    );
  }

  deleteQuestion(currentQuestion: Question): void {
    this.categoryService.deleteQuestion(this.category.id, currentQuestion.id);
  }
}
