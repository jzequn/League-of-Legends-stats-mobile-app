import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  items: object[] = [];
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    // fetch the items only once
    if (this.items.length === 0) {
      this.itemService.fetchItems();
      this.items = this.itemService.itemList;
      console.log(this.items);
    }
  }

  imageUrl(name: string) {

    return `https://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${name}`;
  }
}
