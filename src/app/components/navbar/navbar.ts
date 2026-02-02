import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content-service';
import { LanguageService } from '../../services/language-service';
import { Observable } from 'rxjs';
import { Language } from '../../models/language.type';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',

})
export class Navbar implements OnInit  {
   lang: Language = 'hu';

  currentLang: Language;
  content$!: Observable<any>;

  user: firebase.User | null = null;

  constructor(
    private router: Router,
    private languageService: LanguageService,
    private contentService: ContentService,
    private auth: AuthService
  ) {
    this.currentLang = this.languageService.getCurrentLang();
    this.content$ = this.contentService.getContent();
    this.auth.user$.subscribe(user => this.user = user);
  }

    ngOnInit(): void {
    this.languageService.lang$.subscribe(lang => {
      this.lang = lang;
    });
  }

  switchLanguage(lang: Language): void {
    if (lang === this.currentLang) return;

    this.currentLang = lang;
    this.languageService.setLanguage(lang);
    this.router.navigate(['/', lang]);
  }
  
  login() {
    this.auth.loginWithGoogle();
  }

  logout() {
    this.auth.logout();
  }



}