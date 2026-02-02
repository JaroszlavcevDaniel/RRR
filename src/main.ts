/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';

import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';


platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
