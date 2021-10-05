import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { AnswerListComponent } from './answer-list/answer-list.component';
import { AnswerComponent } from './answer-list/answer/answer.component';
import { QuestionComponent } from './question-list/question/question.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './categories/category/category.component';
import { AppRoutingModule } from './app-routing.module';
import { QuestionDetailComponent } from './question-list/question-detail/question-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionListComponent,
    AnswerListComponent,
    AnswerComponent,
    QuestionComponent,
    CategoriesComponent,
    CategoryComponent,
    QuestionDetailComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
