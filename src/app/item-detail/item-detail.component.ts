import { Component, Input, OnInit } from '@angular/core';
import { saturn } from '../saturn';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  @Input() item?: saturn.Category;

  constructor() { }

  ngOnInit(): void {
  }

}
