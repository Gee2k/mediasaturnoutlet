import { Component, Input, OnInit } from '@angular/core';
import { mmsaturn } from '../mmsaturn';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  @Input() item?: mmsaturn.Category;

  constructor() { }

  ngOnInit(): void {
  }

}
