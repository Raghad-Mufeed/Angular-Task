import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css'],
})
export class FormModalComponent implements OnInit {
  @Input() modal: {
    type: number;
    categoryId: number;
    questionId?: 1;
    answerId?: 1;
    title: string;
    button: string;
    answer?: string;
  } = {
    type: 1,
    categoryId: 1,
    questionId: 1,
    answerId: 1,
    title: 'title',
    button: 'button',
    answer: '',
  };
  data: string = '';

  constructor(
    public activeModal: NgbActiveModal,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.data = this.modal.answer || '';
  }

  closeFormModal(): void {
    this.activeModal.close();
  }

  parseInput(): void {
    switch (this.modal.type) {
      case 1:
        this.addQuestion();
        break;
      case 2:
        this.addAnswer();
        break;
      case 3:
        this.editAnswer();
        break;
    }
  }

  addQuestion(): void {
    if (this.data.trim() !== '') {
      this.categoryService.addQuestion(this.modal.categoryId, this.data);
      this.closeFormModal();
    } else {
      window.alert("You can't enter an empty quesiton");
    }
  }
  
  addAnswer(): void {
    if (this.data.trim() !== '') {
      this.categoryService.addAnswer(
        this.modal.categoryId,
        this.modal.questionId,
        this.data
      );
      this.closeFormModal();
    } else {
      window.alert("You can't enter an empty answer");
    }
  }

  editAnswer(): void {
    if (this.data.trim() !== '') {
      this.categoryService.editAnswer(
        this.modal.categoryId,
        this.modal.questionId,
        this.modal.answerId,
        this.data
      );
      this.closeFormModal();
    } else {
      window.alert("You can't edit your answer to an empty string");
    }
  }
}
