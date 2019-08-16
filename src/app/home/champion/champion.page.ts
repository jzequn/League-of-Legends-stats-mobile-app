import { ChampionService } from './champion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.page.html',
  styleUrls: ['./champion.page.scss'],
})
export class ChampionPage implements OnInit {

  champions: [];

  constructor(private championService: ChampionService) { }

  ngOnInit() {
  }

  fetchChampions() {
    this.championService.fetchChampions();
  }
}
