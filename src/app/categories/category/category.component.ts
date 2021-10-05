import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/classes/classes.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  @Input() category: Category = new Category('', '', '', ['', '']);
  @Input() lastChild: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
