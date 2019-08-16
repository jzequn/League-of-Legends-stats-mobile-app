import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule) }
  // { path: 'search', loadChildren: './home/search/search.module#SearchPageModule' },
  // { path: 'champion', loadChildren: './home/champion/champion.module#ChampionPageModule' },
  // { path: 'item', loadChildren: './home/item/item.module#ItemPageModule' },
  // { path: '**', component: NotFoundComponent },
  // { path: '**', loadChildren: './not-found/not-found.module#NotFoundPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
