import { Home } from './../../../../../../car-practise/src/app/components/home/home';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from '../../models/article-model';
import { Lang } from '../article-card/article-card';
import { ContentService } from '../../services/content-service';
import { Language, LanguageService } from '../../services/language-service';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: false,
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})

export class MainPage implements OnInit, OnDestroy {

  featuredArticle?: Article;
  featuredPlaylist?: Article;
  lang: Language = 'hu';
  private sub = new Subscription()

  constructor(
    private contentService: ContentService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.sub.add(
      this.languageService.lang$.subscribe(l => this.lang = l)
    );

    this.sub.add(
      this.contentService.getFeaturedArticle().subscribe(a => {
        this.featuredArticle = a;
      })
    );
     this.sub.add(
      this.contentService.getFeaturedPlaylist().subscribe(a => {
        this.featuredPlaylist = a;
      })
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe(); 
  }
}