import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../classes/classes.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from '../form-modal/form-modal.component';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
})
export class QuestionListComponent implements OnInit {
  category: Category = new Category('', '', '', []);
  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.category = this.getCategory();
  }

  getCategory(): Category {
    return this.categoryService
      .getCategories()
      .find(
        (category) =>
          category.id ===
          Number(this.activatedRoute.snapshot.queryParamMap.get('categoryId'))
      )!;
  }
  
  openFormModal(): void {
    const modalRef = this.modalService.open(FormModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.modal = {
      type: 1,
      categoryId: this.category.id,
      title: 'New Question',
      button: 'Question',
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
