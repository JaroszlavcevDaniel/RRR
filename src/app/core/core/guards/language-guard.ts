import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { LanguageService } from '../../../services/language-service';
import { Language } from '../../../models/language.type';


@Injectable({
  providedIn: 'root'
})
export class LanguageGuard implements CanActivate {

  constructor(private languageService: LanguageService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    const lang = route.paramMap.get('lang') as Language;

    if (lang === 'hu' || lang === 'en') {
      this.languageService.setLanguage(lang);
      return true;
    }

    // fallback – ha nincs nyelv vagy rossz
    this.languageService.setLanguage('hu');
    return true;
  }

}
