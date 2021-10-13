import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() buttonText: string;
  @Input() text: string;
  @Input() isModalOpened: boolean;
  @Output() newText: EventEmitter<string>;
  @Output() editAnswer: EventEmitter<string>;
  @Output() closeModal: EventEmitter<boolean>;

  constructor(public activeModal: NgbActiveModal) {
    this.title = '';
    this.buttonText = '';
    this.text = '';
    this.isModalOpened = false;
    this.newText = new EventEmitter<string>();
    this.editAnswer = new EventEmitter<string>();
    this.closeModal = new EventEmitter<boolean>();
  }

  ngOnInit(): void {}

  closeFormModal(): void {
    this.text = '';
    this.isModalOpened = false;
    this.closeModal.emit();
  }

  submitModal(): void {
    if (this.text.trim() !== '') {
      if (this.title === 'Edit Answer') {
        this.editAnswer.emit(this.text);
      } else {
        this.newText.emit(this.text);
      }
      this.closeFormModal();
    } else {
      window.alert("You can't use an empty string");
    }
  }

  checkClickOutside(event: Event): void {
    const target = document.getElementById('modal-form');
    if(event.target === target) {
      this.closeFormModal();
    }
  }
}
