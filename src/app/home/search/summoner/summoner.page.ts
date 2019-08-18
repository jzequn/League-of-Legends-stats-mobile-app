import { Component, OnInit } from '@angular/core';
import { SummonerService } from './summoner.service';
import { Match } from './match.model';

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.page.html',
  styleUrls: ['./summoner.page.scss'],
})
export class SummonerPage implements OnInit {

  matchList: Match[] = [];
  constructor(private summonerService: SummonerService) { }

  ngOnInit() {
    this.matchList = this.summonerService.matchList;
  }

}
