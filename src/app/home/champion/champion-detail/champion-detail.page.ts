import { Champion } from './../champion.model';
import { ChampionService } from './../champion.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.page.html',
  styleUrls: ['./champion-detail.page.scss'],
})
export class ChampionDetailPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private championService: ChampionService
  ) { }

  champion: Champion;

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('championId')) {
        this.navCtrl.navigateBack('./home/tabs/champion');
        return;
      }
      // This could cause an error when running the app, add champion type (champion model)
      // to fix the problem
      // Extract the championId from the paramMap and find the champion, then
      // store the champion in champion property.
      this.champion = this.championService.findChampion(paramMap.get('championId'));
      console.log('Champion-detail', this.champion);
    });
  }

  imageUrl(name: string) {
    const url = this.championService.imageUrl(name);
    // console.log('champion details - imageUrl() - print img url');

    // console.log('champion details - imageUrl() - ', url);
    return url;
  }
  loadingImageUrl(name: string) {
    return this.championService.loadingImageUrl(name);
  }


}
