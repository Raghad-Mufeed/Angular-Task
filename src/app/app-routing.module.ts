import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionListComponent } from './question-list/question-list.component';
import { AnswerListComponent } from './answer-list/answer-list.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  { path: 'categories', component: CategoriesComponent },
  { path: 'questions', component: QuestionListComponent },
  { path: 'question', component: AnswerListComponent },
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
