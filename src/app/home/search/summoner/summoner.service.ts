import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SummonerService {
  apiKey = 'RGAPI-2722c78e-075b-46e2-bf27-5d53e939d75a';

  constructor(private http: HttpClient) { }
  fetchSummoner(summoner: string) {



    // https://oc1.api.riotgames.com
    const url = `/api/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${this.apiKey}`;
    this.http.get<any>(url)
      .pipe(
        map(resData => {
          console.log(resData);
          return resData;
        })
      )
      .subscribe(
        // summoner => {

        // }
      );
  }

}
