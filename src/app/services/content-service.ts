// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
// import { LanguageService } from './language-service';
// import { Observable } from 'rxjs';
// import { ContentData } from '../models/content.model';
// import { Article } from '../models/article-model';


// @Injectable({
//   providedIn: 'root'
// })
// export class ContentService {

// private CONTENT_URL = 'content/content.json';

//  // ✅ 1. content$ LÉTEZIK
//   private content$: Observable<ContentData>;

//   constructor(
//     private http: HttpClient,
//     private languageService: LanguageService
//   ) {
//       this.content$ = this.http
//       .get<ContentData>('content/content.json')
//       .pipe(
//         shareReplay(1)
//       );
//   }

//   getContent() {
//     return this.languageService.lang$.pipe(
//       switchMap(lang =>
//         this.http.get<any>(this.CONTENT_URL).pipe(
//           map(data => data[lang])
//         )
//       )
//     );
//   }

//   getArticles() {
//   return this.content$.pipe(
//     map(content => content.articles)
//   );
// }

//   // 🔹 FEATURED CIKK
// getFeaturedArticle(): Observable<Article> {
//   return this.getArticles().pipe(
//     map(articles => articles.find(a => a.featured)! )
//   );
// }

// getActiveArticles(): Observable<Article[]> {
//   return this.getArticles().pipe(
//     map(articles => articles.filter(a => a.isActive && a.isArticle))
//   );
// }

// getActivePlaylists(): Observable<Article[]> {
//   return this.getArticles().pipe(
//     map(articles => articles.filter(a => a.isActive && a.isPlaylist))
//   );
// }
// getAbout(): Observable<Article[]> {
//   return this.getArticles().pipe(
//     map(articles => articles.filter(a => a.about))
//   );
// }

// getFeaturedPlaylist(): Observable<Article> {
//   return this.getArticles().pipe(
//     map(articles => articles.find(a => a.featuredPlaylist)! )
//   );
// }



//   // 🔹 CIKK SLUG ALAPJÁN
// getArticleBySlug(slug: string, lang: 'hu' | 'en') {
//   return this.content$.pipe(
//     map(data =>
//       data.articles.find(
//         (article: any) => article[lang].slug === slug
//       )
//     )
//   );
// }

// getMyArticles(): Observable<Article[]> {
//   return this.getContent().pipe(
//     map(data => data.articles ?? [])
//   );
// }

// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { LanguageService } from './language-service';
import { Observable } from 'rxjs';
import { ContentData } from '../models/content.model';
import { Article } from '../models/article-model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private CONTENT_URL = 'content/content.json';
  private content$: Observable<ContentData>;

  constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) {
    // Initialize content$ in constructor
    this.content$ = this.http
      .get<ContentData>(this.CONTENT_URL)
      .pipe(
        shareReplay(1)
      );
  }

  getContent() {
    return this.languageService.lang$.pipe(
      switchMap(lang =>
        this.http.get<any>(this.CONTENT_URL).pipe(
          map(data => data[lang])
        )
      )
    );
  }

  getArticles() {
    return this.content$.pipe(
      map(content => content.articles)
    );
  }

  getFeaturedArticle(): Observable<Article> {
    return this.getArticles().pipe(
      map(articles => articles.find(a => a.featured)!)
    );
  }

  getActiveArticles(): Observable<Article[]> {
    return this.getArticles().pipe(
      map(articles => articles.filter(a => a.isActive && a.isArticle))
    );
  }

  getActivePlaylists(): Observable<Article[]> {
    return this.getArticles().pipe(
      map(articles => articles.filter(a => a.isActive && a.isPlaylist))
    );
  }

  getAbout(): Observable<Article[]> {
    return this.getArticles().pipe(
      map(articles => articles.filter(a => a.about))
    );
  }

  getFeaturedPlaylist(): Observable<Article> {
    return this.getArticles().pipe(
      map(articles => articles.find(a => a.featuredPlaylist)!)
    );
  }

  getArticleBySlug(slug: string, lang: 'hu' | 'en'): Observable<any> {
    return this.content$.pipe(
      map(data => {
        const article = data.articles.find(
          (article: any) => article[lang]?.slug === slug
        );
        return article ? article[lang] : null;
      })
    );
  }

  getMyArticles(): Observable<Article[]> {
    return this.getContent().pipe(
      map(data => data.articles ?? [])
    );
  }
}
