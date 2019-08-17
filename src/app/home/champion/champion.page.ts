import { ChampionService } from './champion.service';
import { Component, OnInit } from '@angular/core';
import { Champion } from './champion.model';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.page.html',
  styleUrls: ['./champion.page.scss'],
})
export class ChampionPage implements OnInit {

  champions: Champion[] = [];

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
    return this.championService.imageUrl(name);
  }

}
