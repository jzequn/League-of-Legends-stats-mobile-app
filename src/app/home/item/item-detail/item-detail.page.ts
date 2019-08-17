import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ItemService } from '../item.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {

  item: Item;


  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private itemService: ItemService
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('itemId')) {
        this.navCtrl.navigateBack('./home/tabs/item');
        return;
      }
      // This could cause an error when running the app, add item type (item model)
      // to fix the problem
      // Extract the itemId from the paramMap and find the item, then
      // store the item in item property.
      this.item = this.itemService.findItem(paramMap.get('itemId'));
      // console.log('Item-detail', this.item);
    });
  }


  imageUrl(name: string) {
    const url = this.itemService.imageUrl(name);

    console.log('item details - imageUrl() - ', this.item.plainText);
    return url;
  }
  // loadingImageUrl(name: string) {
  //   return this.itemService.loadingImageUrl(name);
  // }
}
