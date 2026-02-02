import { signal } from '@angular/core';
export interface ArticleLang {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredText: string;
  aboutText: string ;
  articleTextOne: string;
  articleTextTwo: string;
  contentSecondPart: string;
  isThereLinks: boolean;
  linkOne: string;
  linkOneName: string;
  linkTwo: string;
  linkTwoName: string;
  linkThree: string;
  linkThreeName: string;
  linkFour: string;
  linkFourName: string;
  linkFive: string;
  linkFiveName: string;
  linkSix: string;
  linkSixName: string;
  linkSeven: string;
  linkSevenName: string;
  linkEight: string;
  linkEightName: string;
  linkNine: string;
  linkNineName: string;
  linkTen: string;
  linkTenName: string;
  

}

export interface Article {
  id: number;
  featured: boolean;
  category: string;
  image: string;
  date: string;
  hu: ArticleLang;
  en: ArticleLang;
  featuredPlaylist: boolean;
  isActive: boolean;
  isArticle: boolean;
  isPlaylist: boolean;
  isThereCarousel: boolean;
  carouselText: string;
  about: boolean;
  aboutText: string;
  articleTextOne: string;
  articleTextTwo: string;
  contentSecondPart: string;
  linkOne: string;
  linkOneName: string;
  linkTwo: string;
  linkTwoName: string;
  linkThree: string;
  linkThreeName: string;
  isThereLinks: boolean;
}
