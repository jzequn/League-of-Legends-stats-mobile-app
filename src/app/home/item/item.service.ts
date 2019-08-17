import { Stats } from './stats.model';
import { Image } from './../champion/image.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Item } from './item.model';
import { Gold } from './gold.model';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemNameList: string[] = [];
  itemObjectList: object[] = [];
  itemList: Item[] = [];

  constructor(private http: HttpClient) {

  }

  fetchItems() {
    this.http.get<any>('https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/item.json')
      .pipe(
        map(resData => {// get the data property using map() from rxjs,  data is an object.
          return resData.data;
        })
      )
      .subscribe(
        items => { // items is the data object from above.
          // console.log(items);
          this.collectItemObjectList(items);
          this.createItemList(this.itemObjectList);
          // console.log('2 fetchItems() - The length of itemList is : ', this.itemList.length);
        }
      );

    // The message below would be print first, then http request would be finished next.
    // console.log('1 fetchItems() - The length of itemList is : ', this.itemList.length);
    // console.log('Test create item successfully', this.itemList[0]);
    // console.log('fetchItems() = Test create item object successfully', this.itemObjectList[6]);
  }

  /**
   *
   * @param name find item by name
   */
  findItem(name: string) {
    return this.itemList.find(
      i => i.name === name);
  }

  /**
   *
   * @param name should be image name.
   */
  imageUrl(name: string) {
    // console.log('champion service - imageUrl()', name);
    return `https://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${name}`;
  }

  // /**
  //  *
  //  * @param name shoudl be champion name
  //  */
  // loadingImageUrl(name: string) {
  //   return `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`;
  // }

  // collect items of type object to this.itemObjectList fetchItems() http request subscription.
  collectItemObjectList(items: object) {
    // check the type of items
    // console.log('item service - collectItemObjectList() - check type of items:', typeof (items));


    // iterate through items object properties.
    Object.values(items).forEach(item => {
      this.itemObjectList.push(Object(item));
    });

    // Test check whether the items are correct or not.
    // for (const item of this.itemList) {
    //   console.log(item);
    // }
    // console.log(this.itemObjectList[0]);
    // console.log(this.itemList[0].image.full);
    // console.log('Item service - collectItemObjectList() - itemObjectList length: ', this.itemObjectList.length);

  }

  // create item (of type Item) list and store the item objects in itemList.
  createItemList(items: object[]) {
    for (const item of items) {
      const itemObject1 = this.createItemObject(item);

      this.itemList.push(itemObject1);
    }

    // const itemObject = this.createItemObject(items[0]);
    // console.log('createItemList - the first item of type item', itemObject);

  }

  createItemObject(item: object) {
    const description = 'description';
    const gold = 'gold';
    const image = 'image';
    const name = 'name';
    const plainText = 'plainText';
    const stats = 'stats';
    const tags = 'tags';
    // console.log('createItemObject- itemservice - ', item[description]);
    const theItem = new Item(
      item[description],
      this.createGoldObject(item[gold]),
      this.createImage(item[image]),
      item[name],
      item[plainText],
      this.createStats(item[stats]),
      item[tags]
    );
    // console.log('createItemObject', theItem);

    return theItem;
  }

  createGoldObject(gold: object) {
    const base = 'base';
    const purchasable = 'purchasable';
    const sell = 'sell';
    const total = 'total';
    return new Gold(
      gold[base],
      gold[purchasable],
      gold[sell],
      gold[total]
    );
  }

  createImage(image: object) {
    const full = 'full';
    const group = 'group';
    const sprite = 'sprite';
    return new Image(
      image[full],
      image[group],
      image[sprite]
    );
  }
  createStats(stats: Stats) {
    const FlatMovementSpeedMod = 'FlatMovementSpeedMod';
    return new Stats(
      stats[FlatMovementSpeedMod]
    );
  }
}
