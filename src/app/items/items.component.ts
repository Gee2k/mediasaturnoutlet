import { Component, OnInit } from '@angular/core';
import { saturn } from '../saturn';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  saturn!: saturn.RootObject;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  getItems(): void {
    this.itemService.getSaturnData()
        .subscribe(saturn => this.saturn = saturn);
  }
}
