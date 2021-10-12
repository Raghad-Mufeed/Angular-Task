import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category, Question } from '../models/category_question_answer.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
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
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faTrashAlt = faTrashAlt;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private modalService: NgbModal
  ) {
    this.category = new Category('', '', '', []);
  }

  ngOnInit(): void {
    this.category = this.categoryService
      .getCategories()
      .find(
        (category) =>
          category.id ===
          Number(this.activatedRoute.snapshot.queryParamMap.get('categoryId'))
      )!;
  }

  openAddQuestionModal(): void {
    const modalRef = this.modalService.open(ModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.modal = {
      title: 'New Question',
      buttonText: 'Question',
      text: '',
    };
    modalRef.result
      .then((result) => {
        if (result !== 'success') {
          this.categoryService.addQuestion(
            this.category.id,
            new Question(result)
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  likeQuestion(currentQuestion: Question): void {
    let question = new Question(currentQuestion.text);
    question.id = currentQuestion.id;
    question.dislikeCount = currentQuestion.dislikeCount;
    question.likeCount = currentQuestion.likeCount + 1;
    question.answers = currentQuestion.answers;
    this.categoryService.updateQuestion(
      this.category.id,
      currentQuestion.id,
      question
    );
  }

  dislikeQuestion(currentQuestion: Question): void {
    let question = new Question(currentQuestion.text);
    question.id = currentQuestion.id;
    question.dislikeCount = currentQuestion.dislikeCount + 1;
    question.likeCount = currentQuestion.likeCount;
    question.answers = currentQuestion.answers;
    this.categoryService.updateQuestion(
      this.category.id,
      currentQuestion.id,
      question
    );
  }

  deleteQuestion(currentQuestion: Question): void {
    this.categoryService.deleteQuestion(this.category.id, currentQuestion.id);
  }
}
