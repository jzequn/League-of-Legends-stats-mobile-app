import { ChampionService } from './champion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.page.html',
  styleUrls: ['./champion.page.scss'],
})
export class ChampionPage implements OnInit {

  

  constructor(private championService: ChampionService) { }

  ngOnInit() {
  }

}
