import { Component, OnInit } from '@angular/core';
import { Items } from '../service/item/items';
import { ItemService } from '../service/item/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item:Items;
  constructor(private itemService:ItemService ) { }

  ngOnInit() {
     this.item = this.itemService.getItems();
  }

}
