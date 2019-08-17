import { SummonerService } from './summoner/summoner.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  search = '';
  constructor(private summonerService: SummonerService) { }

  ngOnInit() {
  }

  getSearch(event: any) {
    // console.log(event);
    console.log(event.target.value);
    this.summonerService.fetchSummoner(event.target.value);

  }
}
