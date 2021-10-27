import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(
    private router: Router,
    private categorySevice: CategoryService,
    private snackBar: MatSnackBar
  ) {
    this.categoryId = 0;
    this.questionId = 0;
    this.category = '';
    this.question = '';
    this.subscription = new Subscription();
    this.checkRoute();
  }

  ngOnInit(): void {}

  checkRoute(): void {
    let param: string[] = [];

    this.subscription.add(
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
          param = event.url?.split('?')[1]?.split('&');
          if (!param) {
            this.category = '';
            this.question = '';
          } else if (param.length === 1) {
            const id: number = Number(param[0].split('=')[1]);
            this.categorySevice.getCategory(id).subscribe(
              (result) => {
                this.category = result.name || '';
                this.categoryId = result.id || 0;
                this.question = '';
              },
              (error) => this.snackBar.open('No category found')
            );
          } else {
            const id: number = Number(param[1].split('=')[1]);
            this.categorySevice.getQuestion(this.categoryId, id).subscribe(
              (result) => {
                this.question = result.text || '';
                this.questionId = id;
              },
              (error) => this.snackBar.open('No question found')
            );
          }
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
