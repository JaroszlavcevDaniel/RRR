// import { Component, Input, OnInit } from '@angular/core';
// import { Article } from '../../models/article-model';
// import { Language, LanguageService } from '../../services/language-service';
// import { ActivatedRoute } from '@angular/router';
// import { ContentService } from '../../services/content-service';
// import { CommonModule } from '@angular/common';
// import firebase from 'firebase/compat/app';
// import { CommentService } from '../../services/comment-service';
// import { AuthService } from '../../services/auth-service';


// @Component({
//   selector: 'app-article-details',
//   standalone: false,
//   templateUrl: './article-details.html',
//   styleUrl: './article-details.css',
// })
// export class ArticleDetails implements OnInit {

  

//   comments: any[] = [];
//   newComment = '';
//   user: firebase.User | null = null;


//   lang!: 'hu' | 'en';
//   slug!: string;
//   article: any = null;

//   constructor(
//     private route: ActivatedRoute,
//     private contentService: ContentService,
//     private commentsService: CommentService,
//     private auth: AuthService
//   ) {}

//   ngOnInit(): void {

//    this.auth.user$.subscribe(u => this.user = u);

//   this.route.paramMap.subscribe(params => {
//     this.lang = params.get('lang') as 'hu' | 'en';
//     this.slug = params.get('slug')!;

//     // ✅ ELŐSZÖR a cikk
//     this.contentService
//       .getArticleBySlug(this.slug, this.lang)
//       .subscribe(article => this.article = article);

//     // ✅ CSAK UTÁNA a kommentek
//     this.commentsService
//       .getComments(this.slug)
//       .subscribe(comments => this.comments = comments);
//   });

//   }

// addComment() {
//   console.log('SLUG:', this.slug);
// console.log('ARTICLE:', this.article);
//     if (!this.user || !this.newComment.trim()) return;

//     this.commentsService.addComment(
//       this.slug,
//       this.newComment,
//       this.user
//     );

//     this.newComment = '';
//   }
  
// }
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../services/content-service';
import { CommentService } from '../../services/comment-service';
import { AuthService } from '../../services/auth-service';
import firebase from 'firebase/compat/app';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article-details',
  standalone: false,
  templateUrl: './article-details.html',
  styleUrl: './article-details.css',
})
export class ArticleDetails implements OnInit, OnDestroy {

  comments: any[] = [];
  newComment = '';
  user: firebase.User | null = null;

  lang!: 'hu' | 'en';
  slug!: string;
  article: any = null;

  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService,
    private commentsService: CommentService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    // Subscribe to user authentication state
    const userSub = this.auth.user$.subscribe(u => {
      this.user = u;
      console.log('User state:', u);
    });
    this.subscriptions.push(userSub);

    // Subscribe to route parameters
    const routeSub = this.route.paramMap.subscribe(params => {
      this.lang = params.get('lang') as 'hu' | 'en';
      this.slug = params.get('slug')!;

      console.log('Loading article:', this.slug, 'Language:', this.lang);

      // Load article
      const articleSub = this.contentService
        .getArticleBySlug(this.slug, this.lang)
        .subscribe(article => {
          this.article = article;
          console.log('Article loaded:', article);
        });
      this.subscriptions.push(articleSub);

      // Load comments
      const commentsSub = this.commentsService
        .getComments(this.slug)
        .subscribe(comments => {
          this.comments = comments;
          console.log('Comments loaded:', comments);
        });
      this.subscriptions.push(commentsSub);
    });
    this.subscriptions.push(routeSub);
  }

  addComment() {
    console.log('addComment called');
    console.log('SLUG:', this.slug);
    console.log('ARTICLE:', this.article);
    console.log('USER:', this.user);
    console.log('NEW COMMENT:', this.newComment);

    if (!this.user) {
      console.error('No user logged in');
      return;
    }

    if (!this.newComment.trim()) {
      console.error('Comment is empty');
      return;
    }

    // ✅ FIX: Use .then() for Promise instead of .subscribe() for Observable
    this.commentsService.addComment(
      this.slug,
      this.newComment.trim(),
      this.user
    ).then((result) => {
      console.log('Comment added successfully:', result);
      this.newComment = ''; // Clear input after successful submission
    }).catch((error) => {
      console.error('Error adding comment:', error);
      alert('Failed to add comment. Please try again.');
    });
  }

  ngOnDestroy(): void {
    // Clean up all subscriptions
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}