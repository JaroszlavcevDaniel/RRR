import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../services/content-service';
import { Article } from '../../models/article-model';
import { Language, LanguageService } from '../../services/language-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit, OnDestroy {

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
      this.contentService.getAbout().subscribe(articles => {
        this.articles = articles;  // Now correctly assigns array to array
      })
    );
  }
    ngOnDestroy() {
    this.sub.unsubscribe(); 
  }

}
