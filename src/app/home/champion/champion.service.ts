import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  championNameList: string[] = [];
  championList: object[] = [];

  constructor(private http: HttpClient) {

  }

  fetchChampions() {
    this.http.get<any>('https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
      .pipe(
        map(resData => {// get the data property using map() from rxjs,  data is an object.
          return resData.data;
        })
      )
      .subscribe(
        champions => { // champions is the data object from above.

          this.collectChampionList(champions);
        }
      );
  }

  // collect champions to this.championList fetchChampions() http request subscription. 
  collectChampionList(champions: object) {
    // iterate through champions object properties.
    Object.values(champions).forEach(champion => {
      this.championList.push(Object(champion));
    });
    // Test check whether the champions are correct or not.
    // for (const champion of this.championList) {
    //   console.log(champion);
    // }
    console.log(this.championList[0]);
    console.log(this.championList[0].blurb);
  }
}
