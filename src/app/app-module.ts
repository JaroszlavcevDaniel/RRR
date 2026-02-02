// import { HttpClientModule } from '@angular/common/http';
// import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
// import { AppRoutingModule } from './app-routing-module';
// import { App } from './app';
// import { Home } from './components/home/home';
// import { Stories } from './components/stories/stories';
// import { Rides } from './components/rides/rides';
// import { Music } from './components/music/music';
// import { About } from './components/about/about';
// import { Navbar } from './components/navbar/navbar';
// import { LanguageSwitch } from './components/language-switch/language-switch';
// import { ArticleCard } from './components/article-card/article-card';
// import { Footer } from './components/footer/footer';
// import { NotFound } from './components/not-found/not-found';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { LanguageGuard } from './core/core/guards/language-guard';
// import { MainPage } from './components/main-page/main-page';
// import { ArticleDetails } from './components/article-details/article-details';
// import { FormsModule } from '@angular/forms';
// import { MarkdownModule } from 'ngx-markdown';
// import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// import { environment } from './environment/environment';
// import { getAuth, provideAuth } from '@angular/fire/auth';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// import { getStorage, provideStorage } from '@angular/fire/storage';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


// @NgModule({
//   declarations: [
//     App,
//     Home,
//     Stories,
//     Rides,
//     Music,
//     About,
//     Navbar,
//     LanguageSwitch,
//     ArticleCard,
//     Footer,
//     NotFound,
//     MainPage,
//     ArticleDetails,

//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     NgbModule,
//     HttpClientModule,
//     FormsModule,
//     MarkdownModule.forRoot(),
//     AngularFireModule.initializeApp(environment.firebase),
//     AngularFireAuthModule,
//     AngularFirestoreModule,
    

//   ],
//   providers: [
//     provideBrowserGlobalErrorListeners(),
//     provideFirebaseApp(() => initializeApp(environment.firebase)),
//     provideAuth(() => getAuth()),
//     provideFirestore(() => getFirestore()),
//     provideStorage(() => getStorage()),
//   ],
//   bootstrap: [App]
// })
// export class AppModule { }
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './components/home/home';
import { Stories } from './components/stories/stories';
import { Rides } from './components/rides/rides';
import { Music } from './components/music/music';
import { About } from './components/about/about';
import { Navbar } from './components/navbar/navbar';
import { LanguageSwitch } from './components/language-switch/language-switch';
import { ArticleCard } from './components/article-card/article-card';
import { Footer } from './components/footer/footer';
import { NotFound } from './components/not-found/not-found';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LanguageGuard } from './core/core/guards/language-guard';
import { MainPage } from './components/main-page/main-page';
import { ArticleDetails } from './components/article-details/article-details';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { environment } from './environment/environment';

// ✅ USE ONLY COMPAT API (remove modular API imports)
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    App,
    Home,
    Stories,
    Rides,
    Music,
    About,
    Navbar,
    LanguageSwitch,
    ArticleCard,
    Footer,
    NotFound,
    MainPage,
    ArticleDetails,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    MarkdownModule.forRoot(),
    // ✅ Initialize Firebase ONCE with compat API
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [
    // ✅ REMOVED: All modular API providers (provideFirebaseApp, provideAuth, etc.)
    // These were causing the NG0203 error by conflicting with compat API
  ],
  bootstrap: [App]
})
export class AppModule { }