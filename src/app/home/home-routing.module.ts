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
                    },
                    // {
                    //     path: ':userId',
                    //     loadChildren: './search/user/user.module#UserModulePage'
                    // },
                ]
            },
            {
                path: 'champion',
                children: [
                    {
                        path: '',
                        loadChildren: './champion/champion.module#ChampionPageModule'
                    },
                    // {
                    //     path: ':userId',
                    //     loadChildren: './search/user/user.module#UserModulePage'
                    // },
                ]
            },
            {
                path: 'item',
                children: [
                    {
                        path: '',
                        loadChildren: './item/item.module#ItemPageModule'
                    },
                    // {
                    //     path: ':userId',
                    //     loadChildren: './search/user/user.module#UserModulePage'
                    // },
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
