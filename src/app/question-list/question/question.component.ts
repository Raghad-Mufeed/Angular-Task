import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/classes/classes.model';
import {
  faThumbsUp,
  faThumbsDown,
  faTrashAlt,
} from '@fortawesome/free-regular-svg-icons';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  @Input() question: Question = new Question('');
  @Input() category: number = 1;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faTrashAlt = faTrashAlt;
  @Input() lastChild: boolean = true;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {}

  likeQuestion(): void {
    this.categoryService.likeQuestion(this.category, this.question.id);
  }

  dislikeQuestion(): void {
    this.categoryService.dislikeQuestion(this.category, this.question.id);
  }
  
  deleteQuestion(): void {
    this.categoryService.deleteQuestion(this.category, this.question.id);
  }
}
