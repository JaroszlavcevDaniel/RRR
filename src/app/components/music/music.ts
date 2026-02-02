import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from '../../models/article-model';
import { Language, LanguageService } from '../../services/language-service';
import { Subscription } from 'rxjs';
import { ContentService } from '../../services/content-service';

@Component({
  selector: 'app-music',
  standalone: false,
  templateUrl: './music.html',
  styleUrl: './music.css',
})
export class Music implements OnInit, OnDestroy {

  articles: Article[] = [];  // Array to hold all active articles
  lang: Language = 'hu';
  private sub = new Subscription();

  constructor(
    private contentService: ContentService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    // Subscribe to language changes
    this.sub.add(
      this.languageService.lang$.subscribe(l => this.lang = l)
    );

    // Subscribe to active articles
    this.sub.add(
      this.contentService.getActivePlaylists().subscribe(articles => {
        this.articles = articles;  // Now correctly assigns array to array
      })
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe(); 
  }
}

