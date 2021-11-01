import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question.model';
import { Answer } from '../models/answer.model';
import { AnswerService } from '../services/answer.service';
import { QuestionService } from '../services/question.service';
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
  question: Question;
  answer: Answer;
  answers: Answer[];
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
    private questionSerivce: QuestionService,
    private answerService: AnswerService,
    private snackBar: MatSnackBar
  ) {
    this.question = new Question();
    this.answer = new Answer();
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
    this.questionSerivce.getQuestion(categoryId).subscribe(
      (result) => (this.question = new Question().fromDTO(result)),
      (error) => this.snackBar.open('No answers found')
    );
    this.answerService.getAnswers(questionId).subscribe(
      (result) => {result.forEach(answer => this.answers.push(new Answer().fromDto(answer)));
          this.answers.sort(function (a, b) {
            return a.id - b.id;
          });
        },
      (error) => this.snackBar.open('No answers found')
    );
  }

  openEditAnswerModal(answer: Answer): void {
    this.answer = answer;
    this.modalData = answer.text;
    this.modalTitle = 'Edit Answer';
    this.modalButtonLabel = 'Edit';
    this.isModalOpened = true;
  }

  submitEditAnswerModal(text: string): void {
    const questionId = Number(
      this.activatedRoute.snapshot.queryParamMap.get('questionId')
    );
    this.answer.text = text;
    this.answerService
      .updateAnswer(this.answer.toDTO())
      .subscribe(
        (result) => {},
        (error) => console.log(error)
      );
  }

  likeAnswer(answer: Answer): void {
    answer.likeCount++;
    const questionId = Number(
      this.activatedRoute.snapshot.queryParamMap.get('questionId')
    );
    this.answerService
      .updateAnswer(answer.toDTO())
      .subscribe(
        (result) => {},
        (error) => console.log(error)
      );
  }

  dislikeAnswer(answer: Answer): void {
    answer.dislikeCount++;
    const questionId = Number(
      this.activatedRoute.snapshot.queryParamMap.get('questionId')
    );
    this.answerService
      .updateAnswer(answer.toDTO())
      .subscribe(
        (result) => {},
        (error) => console.log(error)
      );
  }

  deleteAnswer(answerId: number): void {
    this.answerService.deleteAnswer(answerId).subscribe(
      (result) => {this.answers = this.answers.filter(answer => answer.id !== answerId);},
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
    const questionId = Number(
      this.activatedRoute.snapshot.queryParamMap.get('questionId')
    );
    this.answerService
      .addAnswer({
        id: 0,
        likeCount: 0,
        dislikeCount: 0,
        text: text,
        questionId: questionId,
      })
      .subscribe(
        (result) => this.answers.push(new Answer().fromDto(result)),
        (error) => console.log(error)
      );
  }
}
