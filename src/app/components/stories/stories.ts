import { Language, LanguageService } from './../../services/language-service';
import { ContentService } from './../../services/content-service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { Article } from '../../models/article-model';

@Component({
  selector: 'app-stories',
  standalone: false,
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories implements OnInit, OnDestroy {

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
      this.contentService.getActiveArticles().subscribe(articles => {
        this.articles = articles;  // Now correctly assigns array to array
      })
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe(); 
  }
}
