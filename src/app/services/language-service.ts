import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export type Language = 'hu' | 'en';

@Injectable({
  providedIn: 'root'
})


export class LanguageService {

 private langSubject = new BehaviorSubject<'hu' | 'en'>('hu');
  lang$ = this.langSubject.asObservable();

  setLanguage(lang: 'hu' | 'en') {
    this.langSubject.next(lang);
  }

  getCurrentLang(): 'hu' | 'en' {
    return this.langSubject.value;
  }
}