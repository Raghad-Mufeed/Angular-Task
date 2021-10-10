import { Component, OnInit } from '@angular/core';
import { Question } from '../classes/classes.model';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from '../form-modal/form-modal.component';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css'],
})
export class AnswerListComponent implements OnInit {
  question: Question = new Question('');
  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.question = this.getCategory();
  }

  getCategory(): Question {
    return this.categoryService
      .getCategories()
      .find(
        (category) =>
          category.id ===
          Number(this.activatedRoute.snapshot.queryParamMap.get('categoryId'))
      )!
      .questions.find(
        (question) =>
          question.id ===
          Number(this.activatedRoute.snapshot.queryParamMap.get('questionId'))
      )!;
  }

  openFormModal(): void {
    const modalRef = this.modalService.open(FormModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.modal = {
      type: 2,
      categoryId: Number(
        this.activatedRoute.snapshot.queryParamMap.get('categoryId')
      ),
      questionId: this.question.id,
      title: 'New Answer',
      button: 'Answer',
    };
    modalRef.result
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
