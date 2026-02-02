console.log('App routing loaded');
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ArticleCard } from './components/article-card/article-card';
import { Stories } from './components/stories/stories';
import { Music } from './components/music/music';
import { About } from './components/about/about';
import { NotFound } from './components/not-found/not-found';
import { LanguageGuard } from './core/core/guards/language-guard';
import { ArticleDetails } from './components/article-details/article-details';

const routes: Routes = [

  {
    path: ':lang/articles/:slug',
    component: ArticleDetails
  },

  // 🔥 FŐOLDAL
  {
    path: ':lang',
    component: Home
  },

  // 🔥 STATIKUS OLDALAK
  {
    path: ':lang/about',
    component: About
  },
  {
    path: ':lang/stories',
    component: Stories
  },
  {
    path: ':lang/playlists',
    component: Music
  },

  // 🔁 DEFAULT
  {
    path: '',
    redirectTo: 'hu',
    pathMatch: 'full'
  },

  // 🧱 404
  {
    path: '**',
    redirectTo: 'hu'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
