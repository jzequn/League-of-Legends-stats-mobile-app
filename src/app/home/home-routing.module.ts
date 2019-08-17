import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
const routes: Routes = [
    {
        path: 'tabs',
        component: HomePage,
        children: [
            {
                path: 'search',
                children: [
                    {
                        path: '',
                        loadChildren:
                            // './search/search.module#SearchPageModule'
                            () => import('./search/search.module').then(m => m.SearchPageModule)
                    },
                    {
                        path: ':summonerId',
                        loadChildren:
                            // './search/summoner/summoner.module#SummonerPageModule'
                            () => import('./search/summoner/summoner.module').then(m => m.SummonerPageModule)

                    }
                ]
            },
            {
                path: 'champion',
                children: [
                    {
                        path: '',
                        loadChildren:
                            //  './champion/champion.module#ChampionPageModule'
                            () => import('./champion/champion.module').then(m => m.ChampionPageModule)
                    },
                    {
                        path: ':championId',
                        loadChildren:
                            // './champion/champion-detail/champion-detail.module#ChampionDetailPageModule'
                            () => import('./champion/champion-detail/champion-detail.module').then(m => m.ChampionDetailPageModule)
                        // I dont know if issue will happen or not, just comment this out
                    }
                ]
            },
            {
                path: 'item',
                children: [
                    {
                        path: '',
                        loadChildren:
                            // './item/item.module#ItemPageModule'
                            () => import('./item/item.module').then(m => m.ItemPageModule)
                    },
                    {
                        path: ':itemId',
                        loadChildren:
                            // './item/item-detail/item-detail.module#ItemDetailPageModule'
                            () => import('./item/item-detail/item-detail.module').then(m => m.ItemDetailPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/home/tabs/search',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home/tabs/search',
        pathMatch: 'full'

    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
