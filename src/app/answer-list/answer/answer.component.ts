import { Component, OnInit, Input } from '@angular/core';
import { Answer } from 'src/app/classes/classes.model';
import {
  faThumbsUp,
  faThumbsDown,
  faTrashAlt,
} from '@fortawesome/free-regular-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from '../../form-modal/form-modal.component';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css'],
})
export class AnswerComponent implements OnInit {
  @Input() answer: Answer = new Answer('');
  @Input() lastChild: boolean = true;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faTrashAlt = faTrashAlt;
  faPen = faPen;
  constructor(
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
    private categorySevice: CategoryService
  ) {}

  ngOnInit(): void {}

  openFormModal(): void {
    const modalRef = this.modalService.open(FormModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.modal = {
      type: 3,
      categoryId: Number(
        this.activatedRoute.snapshot.queryParamMap.get('categoryId')
      ),
      questionId: Number(
        this.activatedRoute.snapshot.queryParamMap.get('questionId')
      ),
      answerId: this.answer.id,
      title: 'Edit Answer',
      button: 'Edit',
      answer: this.answer.answer,
    };
    modalRef.result
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  likeAnswer(): void {
    this.categorySevice.likeAnswer(
      Number(this.activatedRoute.snapshot.queryParamMap.get('categoryId')),
      Number(this.activatedRoute.snapshot.queryParamMap.get('questionId')),
      this.answer.id
    );
  }

  dislikeAnswer(): void {
    this.categorySevice.dislikeAnswer(
      Number(this.activatedRoute.snapshot.queryParamMap.get('categoryId')),
      Number(this.activatedRoute.snapshot.queryParamMap.get('questionId')),
      this.answer.id
    );
  }
  
  deleteAnswer(): void {
    this.categorySevice.deleteAnswer(
      Number(this.activatedRoute.snapshot.queryParamMap.get('categoryId')),
      Number(this.activatedRoute.snapshot.queryParamMap.get('questionId')),
      this.answer.id
    );
  }
}
