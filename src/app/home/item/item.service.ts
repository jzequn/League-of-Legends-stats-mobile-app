import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemNameList: string[] = [];
  itemList: object[] = [];

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
          this.collectItemList(items);
        }
      );
  }

  // collect items to this.itemList fetchItems() http request subscription.
  collectItemList(items: object) {
    // iterate through items object properties.
    Object.values(items).forEach(item => {
      this.itemList.push(Object(item));
    });
    // Test check whether the items are correct or not.
    // for (const item of this.itemList) {
    //   console.log(item);
    // }
    console.log(this.itemList[0]);
    console.log(this.itemList[0].image.full);
  }
}
