import { ChampionService } from './../champion/champion.service';
import { Summoner } from './summoner/summoner.model';
import { Champion } from './../champion/champion.model';
import { SummonerService } from './summoner/summoner.service';
import { Component, OnInit } from '@angular/core';
import { Match } from './summoner/match.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  search = '';
  summoner: Summoner;
  matchList: Match[] = [];
  champions: Champion[] = [];
  constructor(private summonerService: SummonerService, private championService: ChampionService) { }


  ngOnInit() {
    // fetch the champions only once
    if (this.championService.championList.length === 0) {
      this.championService.fetchChampions();
      this.champions = this.championService.championList;
      // console.log(this.champions);
    }
    this.matchList = this.summonerService.matchList;
    this.champions = this.championService.championList;
  }

  onClick() {
    console.log('champions length', this.champions.length);
    console.log(this.champions);
  }

  getSearch(event: any) {
    // console.log(event);
    console.log(event.target.value);
    this.summonerService.fetchSummoner(event.target.value);
    this.summoner = this.summonerService.summoner;
    console.log(this.summoner);

  }

  imageUrl(championKey: string) {
    // console.log('championlist name', this.champions.length);

    console.log(championKey);
    const champion = this.findChampionImageNameByKey(championKey);
    const url = this.championService.imageUrl(champion);
    // console.log(url);

    return url;
  }

  findChampionImageNameByKey(key: string) {
    // let name = '';
    const list = this.champions.find(champ => champ.key === key);


    // console.log('list', list);
    return null;
  }
}

