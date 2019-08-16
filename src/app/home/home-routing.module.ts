import { HomePage } from './home.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
                        loadChildren: './search/search.module#SearchPageModule'
                    }
                ]
            },
            {
                path: 'champion',
                children: [
                    {
                        path: '',
                        loadChildren: './champion/champion.module#ChampionPageModule'
                    }
                ]
            },
            {
                path: 'item',
                children: [
                    {
                        path: '',
                        loadChildren: './item/item.module#ItemPageModule'
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

    },
    { path: 'champion-detail', loadChildren: './champion/champion-detail/champion-detail.module#ChampionDetailPageModule' },
    { path: 'item-detail', loadChildren: './item/item-detail/item-detail.module#ItemDetailPageModule' },
    { path: 'summoner', loadChildren: './search/summoner/summoner.module#SummonerPageModule' }

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
