import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() submitButtonLabel: string;
  @Input() data: string;
  @Input() isModalOpened: boolean;
  @Output() submitAddModal: EventEmitter<string>;
  @Output() submitEditModal: EventEmitter<string>;
  @Output() closeModal: EventEmitter<boolean>;
  @HostListener('document:keydown.escape', ['$event']) 
  
  onKeydownHandler(event: KeyboardEvent) {
    this.closeFormModal();
  }

  constructor(public activeModal: NgbActiveModal) {
    this.title = '';
    this.submitButtonLabel = '';
    this.data = '';
    this.isModalOpened = false;
    this.submitAddModal = new EventEmitter<string>();
    this.submitEditModal = new EventEmitter<string>();
    this.closeModal = new EventEmitter<boolean>();
  }

  ngOnInit(): void {}

  closeFormModal(): void {
    this.closeModal.emit();
    this.data = '';
    this.isModalOpened = false;
  }

  submitModal(): void {
    if (this.title === 'Edit Answer') {
      this.submitEditModal.emit(this.data);
    } else {
      this.submitAddModal.emit(this.data);
    }
    this.closeFormModal();
  }
}
