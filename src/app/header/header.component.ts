import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../classes/classes.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  route: string = '';
  categoryId: number = 1;
  questionId: number = 1;
  id: number = 1;
  category: string = '';
  CurrentCategory: Category = new Category('', '', '', []);
  question: string = '';
  param: string[] = [];
  constructor(private router: Router, private categorySevice: CategoryService) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.route = event.url.split('?')[0].slice(1);
        this.param = event.url.split('?')[1]?.split('&');
        if (!this.param) {
          this.category = '';
          this.question = '';
        } else if (this.param.length == 1) {
          this.id = Number(this.param[0].split('=')[1]);
          this.CurrentCategory = this.categorySevice
            .getCategories()
            .find((category) => category.id === this.id!)!;
          this.category = this.CurrentCategory!.name;
          this.categoryId = this.id;
          this.question = '';
        } else {
          this.id = Number(this.param[1].split('=')[1]);
          this.question = this.CurrentCategory.questions.find(
            (question) => question.id === this.id
          )!.question;
          this.questionId = this.id;
        }
      }
    });
  }

  ngOnInit(): void {}
}
