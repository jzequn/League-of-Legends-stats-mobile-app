import { Match } from './match.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Summoner } from './summoner.model';

@Injectable({
  providedIn: 'root'
})
export class SummonerService {
  apiKey = 'RGAPI-2722c78e-075b-46e2-bf27-5d53e939d75a';

  summoner: Summoner;
  matchList: Match[] = [];
  matchObjectList: object[] = [];
  constructor(private http: HttpClient) { }

  fetchSummoner(summoner: string) {
    // https://oc1.api.riotgames.com
    const url = `/api/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${this.apiKey}`;
    this.http.get<any>(url)
      .pipe(
        map(resData => { // resData - object
          return resData;
        })
      )
      .subscribe(
        resData => {
          this.summoner = this.createSummoner(resData);
          console.log(this.summoner);
          // after fetching the summoner accountId, fetch the match list.
          this.fetchMatchList(this.summoner.accountId);
        }
      );
  }

  fetchMatchList(encryptedAccoutId: string) {
    const url = `/api/lol/match/v4/matchlists/by-account/${encryptedAccoutId}?api_key=${this.apiKey}`;
    this.http.get<any>(url)
      .pipe(
        map(resData => {
          return resData.matches;
        })
      )
      .subscribe(
        matches => {// typeof(matches) = object
          this.collectMatchObjectList(matches);
          for (const match of this.matchObjectList) {
            const oneMatch = this.createMatch(match);
            this.matchList.push(oneMatch);
          }
        }
      );

  }

  collectMatchObjectList(matches: object) {
    // iterate through matches object properties.
    Object.values(matches).forEach(match => {
      this.matchObjectList.push(Object(match));
    });
  }

  createSummoner(resData: object) {
    const profileIconId = 'profileIconId';
    const name = 'name';
    const puuid = 'puuid';
    const summonerLevel = 'summonerLevel';
    const revisionDate = 'revisionDate';
    const id = 'id';
    const accountId = 'accountId';
    return new Summoner(
      resData[profileIconId],
      resData[name],
      resData[puuid],
      resData[summonerLevel],
      resData[revisionDate],
      resData[id],
      resData[accountId]
    );
  }

  createMatch(match: object) {
    const champion = 'champion';
    const gameId = 'gameId';
    const lane = 'lane';
    const platformId = 'platformId';
    const queue = 'queue';
    const role = 'role';
    const season = 'season';
    const timestamp = 'timestamp';
    // console.log('timestamp - createMatch()', match[timestamp]);

    return new Match(
      match[champion],
      match[gameId],
      match[lane],
      match[platformId],
      match[queue],
      match[role],
      match[season],
      match[timestamp]
    );

  }
}
