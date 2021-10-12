import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() modal: { title: string; buttonText: string; text: string };
  data: string;

  constructor(public activeModal: NgbActiveModal) {
    this.modal = { title: 'title', buttonText: 'button', text: '' };
    this.data = '';
  }

  ngOnInit(): void {
    this.data = this.modal.text;
  }

  closeFormModal(data: string): void {
    this.activeModal.close(data);
  }

  emitEvent(): void {
    if (this.data.trim() !== '') {
      this.closeFormModal(this.data);
    } else {
      window.alert("You can't use an empty string");
    }
  }
}
