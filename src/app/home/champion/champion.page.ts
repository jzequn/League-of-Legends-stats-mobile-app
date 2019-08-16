import { ChampionService } from './champion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.page.html',
  styleUrls: ['./champion.page.scss'],
})
export class ChampionPage implements OnInit {

  champions: object[] = [];

  constructor(private championService: ChampionService) { }

  ngOnInit() {
    // fetch the champions only once
    if (this.champions.length === 0) {
      this.championService.fetchChampions();
      this.champions = this.championService.championList;
      // console.log(this.champions);
    }
  }

  imageUrl(name: string) {
    return `https://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${name}`;
  }

}
