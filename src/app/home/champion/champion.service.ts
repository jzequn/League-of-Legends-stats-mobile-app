import { Image } from './image.model';
import { Stats } from './stats.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Champion } from './champion.model';
import { Info } from './info.model';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  championNameList: string[] = [];
  championObjectList: object[] = [];
  championList: Champion[] = [];
  constructor(private http: HttpClient) {

  }

  fetchChampions() {
    this.http.get<any>('https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
      .pipe(
        map(resData => {// get the data property using map() from rxjs,  data is an object.
          console.log(resData);
          return resData.data;
        })
      )
      .subscribe(
        champions => { // champions is the data object from above.
          this.collectChampionList(champions);
          this.createChampionObjectList(this.championObjectList);
        }
      );

    // console.log('Test in fetchChampions() - Champion.service.ts');
    // console.log(this.championList2[0]);
  }

  /**
   * 
   * @param name should be image name.
   */
  imageUrl(name: string) {
    // console.log('champion service - imageUrl()', name);
    return `https://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${name}`;
  }

  /**
   * 
   * @param name shoudl be champion name
   */
  loadingImageUrl(name: string) {
    return `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`;
  }
  // This will convert the champions fetched from lolAPis service to champions object list.
  createChampionObjectList(champions: object[]) {
    for (const champion of champions) {
      // Object.prototype.hasOwnProperty.call(champion, prop){
      // console.log(champion);

      const champ = this.createChampionObject(champion);
      this.championList.push(champ);
      // }
    }
    // const champ = this.createChampionObject(champions[0]);
    const aatrox = this.championList[0];
    console.log(aatrox);

    // console.log('createChampionObjectList() - Champion.service.ts');
  }

  // This will create an champion object
  createChampionObject(champion: object) {
    const image = 'image';
    const info = 'info';
    const key = 'key';
    const name = 'name';
    const partype = 'partype';
    const stats = 'stats';
    const tags = 'tags';
    const title = 'title';
    const version = 'version';
    const id = 'id';
    const blurb = 'blurb';
    // console.log('Test createChampionObject()', champion[image]);
    return new Champion(
      this.createImage(champion[image]),
      this.createInfo(champion[info]),
      champion[key],
      champion[name],
      champion[partype],
      this.createStats(champion[stats]),
      champion[tags],
      champion[title],
      champion[version],
      champion[id],
      champion[blurb]
    );
  }

  createInfo(info: object) {
    const attack = 'attack';
    const defense = 'defense';
    const difficulty = 'difficulty';
    const magic = 'magic';
    return new Info(info[attack], info[defense], info[difficulty], info[magic]);
  }

  createStats(stats: Stats) {
    const armor = 'armor';
    const armorperlevel = 'armorperlevel';
    const attackdamage = 'attackdamage';
    const attackdamageperlevel = 'attackdamageperlevel';
    const attackrange = 'attackrange';
    const attackspeedoffset = 'attackspeedoffset';
    const attackspeedperlevel = 'attackspeedperlevel';
    const crit = 'crit';
    const critperlevel = 'critperlevel';
    const hp = 'hp';
    const hpperlevel = 'hpperlevel';
    const hpregen = 'hpregen';
    const hpregenperlevel = 'hpregenperlevel';
    const movespeed = 'movespeed';
    const mp = 'mp';
    const mpperlevel = 'mpperlevel';
    const mpregen = 'mpregen';
    const mpregenperlevel = 'mpregenperlevel';
    const spellblock = 'spellblock';
    const spellblockperlevel = 'spellblocklevel';
    return new Stats(
      stats[armor],
      stats[armorperlevel],
      stats[attackdamage],
      stats[attackdamageperlevel],
      stats[attackrange],
      stats[attackspeedoffset],
      stats[attackspeedperlevel],
      stats[crit],
      stats[critperlevel],
      stats[hp],
      stats[hpperlevel],
      stats[hpregen],
      stats[hpregenperlevel],
      stats[movespeed],
      stats[mp],
      stats[mpperlevel],
      stats[mpregen],
      stats[mpregenperlevel],
      stats[spellblock],
      stats[spellblockperlevel]
    );
  }

  createImage(image: object) {
    const full = 'full';
    const group = 'group';
    const sprite = 'sprite';
    // console.log('Image test: createImage()');
    // console.log(image[full], image[group], image[sprite]);

    return new Image(image[full], image[group], image[sprite]);
  }

  /**
   * @param id find champion by id
   */
  findChampion(id: string) {
    return this.championList.find(
      c => c.id === id);
  }

  // collect champions to this.championList fetchChampions() http request subscription.
  // iterate through (Object)champions properties, which are champion objects.
  collectChampionList(champions: object) {
    // iterate through champions object properties.
    Object.values(champions).forEach(champion => {
      this.championObjectList.push(Object(champion));
    });

    // Test check whether the champions are correct or not.
    // for (const champion of this.championObjectList) {
    //   console.log(champion);
    // }

    // print : champion - Aatrox
    // const aatrox = this.championObjectList[0];
    // console.log(aatrox);
    // console.log(Object.keys(aatrox));
    // const image = 'image';
    // console.log(aatrox[image]);

    // const version = 'version';
    // console.log(aatrox[version]);

    // Object.keys(aatrox).forEach(key => {
    //   console.log(typeof (key));
    //   console.log(aatrox[key]);
    // });

  }
}

