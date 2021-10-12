import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category_question_answer.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  categoryId: number;
  questionId: number;
  category: string;
  question: string;
  subscription: Subscription;

  constructor(private router: Router, private categorySevice: CategoryService) {
    this.categoryId = 1;
    this.questionId = 1;
    this.category = '';
    this.question = '';
    this.subscription = new Subscription();
    this.checkRoute();
  }

  ngOnInit(): void {}

  checkRoute(): void {
    let param: string[] = [];
    let currentCategory: Category = new Category('', '', '', []);

    this.subscription.add(
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
          param = event.url.split('?')[1]?.split('&');
          if (!param) {
            this.category = '';
            this.question = '';
          } else if (param.length === 1) {
            let id: number = Number(param[0].split('=')[1]);
            currentCategory = this.categorySevice
              .getCategories()
              .find((category) => category.id === id)!;
            if (currentCategory) {
              this.category = currentCategory.name;
              this.categoryId = id;
            } else {
              this.category = '';
            }
            this.question = '';
          } else {
            let id: number = Number(param[1].split('=')[1]);
            this.question = currentCategory.questions.find(
              (question) => question.id === id
            )!.text;
            this.questionId = id;
          }
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
