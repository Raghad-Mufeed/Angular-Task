import { Component, OnInit } from '@angular/core';
import { Question, Answer } from '../models/category_question_answer.model';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
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
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faTrashAlt = faTrashAlt;
  faPen = faPen;

  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private modalService: NgbModal
  ) {
    this.question = new Question('');
  }

  ngOnInit(): void {
    const category = this.categoryService
      .getCategories()
      .find(
        (category) =>
          category.id ===
          Number(this.activatedRoute.snapshot.queryParamMap.get('categoryId'))
      );
    if (category) {
      this.question = category.questions.find(
        (question) =>
          question.id ===
          Number(this.activatedRoute.snapshot.queryParamMap.get('questionId'))
      )!;
    }
  }

  openEditAnswerModal(answer: Answer): void {
    const modalRef = this.modalService.open(ModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.modal = {
      title: 'Edit Answer',
      buttonText: 'Edit',
      text: answer.text,
    };
    modalRef.result
      .then((result) => {
        if (result !== 'success') {
          this.editAnswer(answer, result);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  editAnswer(currentAnswer: Answer, text: string): void {
    let answer = new Answer(text);
    answer.id = currentAnswer.id;
    answer.likeCount = currentAnswer.likeCount;
    answer.dislikeCount = currentAnswer.dislikeCount;
    this.categoryService.updateAnswer(
      Number(this.activatedRoute.snapshot.queryParamMap.get('categoryId')),
      this.question.id,
      currentAnswer.id,
      answer
    );
  }

  likeAnswer(currentAnswer: Answer): void {
    let answer = new Answer(currentAnswer.text);
    answer.id = currentAnswer.id;
    answer.likeCount = currentAnswer.likeCount + 1;
    answer.dislikeCount = currentAnswer.dislikeCount;
    this.categoryService.updateAnswer(
      Number(this.activatedRoute.snapshot.queryParamMap.get('categoryId')),
      Number(this.activatedRoute.snapshot.queryParamMap.get('questionId')),
      currentAnswer.id,
      answer
    );
  }

  dislikeAnswer(currentAnswer: Answer): void {
    let answer = new Answer(currentAnswer.text);
    answer.id = currentAnswer.id;
    answer.likeCount = currentAnswer.likeCount;
    answer.dislikeCount = currentAnswer.dislikeCount + 1;
    this.categoryService.updateAnswer(
      Number(this.activatedRoute.snapshot.queryParamMap.get('categoryId')),
      Number(this.activatedRoute.snapshot.queryParamMap.get('questionId')),
      currentAnswer.id,
      answer
    );
  }

  deleteAnswer(answerId: number): void {
    this.categoryService.deleteAnswer(
      Number(this.activatedRoute.snapshot.queryParamMap.get('categoryId')),
      Number(this.activatedRoute.snapshot.queryParamMap.get('questionId')),
      answerId
    );
  }

  openAddAnswerModal(): void {
    const modalRef = this.modalService.open(ModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.modal = {
      title: 'New Answer',
      buttonText: 'Answer',
      text: '',
    };
    modalRef.result
      .then((result) => {
        if (result !== 'success') {
          this.addAnswer(result);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addAnswer(text: string): void {
    this.categoryService.addAnswer(
      Number(this.activatedRoute.snapshot.queryParamMap.get('categoryId')),
      this.question.id,
      new Answer(text)
    );
  }
}
