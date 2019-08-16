import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ChampionService {


  constructor(private http: HttpClient) {

  }

  fetchChampions() {
    this.http.get<any>('https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json').subscribe(img =>
      console.log(img)
    );
  }
}
