import { Injectable } from '@angular/core';
import { Items } from './items';



@Injectable()
export class ItemService {

  itemlist:Items = {
                  id:123456,
                  image:'../../assets/photos/blue_jeans.jpg',
                  itemName:'Item Six',
                  itemValue:24.99,
                  description:'Blue color jeans'};
  constructor() { }

     getItems(){
      return this.itemlist;
     }
}
