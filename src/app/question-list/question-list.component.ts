import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
})
export class QuestionListComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
  }
}
