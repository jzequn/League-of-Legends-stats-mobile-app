import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ChampionService {


  constructor(private http: HttpClient) {

  }

  fetchChampions() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1').subscribe(img =>
      console.log(img)
    );
  }
}
