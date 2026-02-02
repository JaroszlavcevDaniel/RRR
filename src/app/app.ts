import { Component, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LanguageService } from './services/language-service';
import { filter } from 'rxjs';
import { Language } from './models/language.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {

  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const lang = this.router.url.split('/')[1] as Language;

        if (lang === 'hu' || lang === 'en') {
          this.languageService.setLanguage(lang);
        }
      });
  }
}
