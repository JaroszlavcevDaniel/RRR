import { BreadcrumbItem } from "./breadcrumbItem.model";

export interface RouteModel {
  lang: 'hu' | 'en';

  // technikai
  path: string;        // /hu/stories/az-elso-ut
  slug: string;        // az-elso-ut

  // tartalom kapcsolat
  contentType: 'article' | 'ride' | 'playlist' | 'page';
  contentId: string;  // pl. "first-ride"

  // SEO
  title: string;
  description: string;
  ogImage?: string;

  // navigáció
  breadcrumb?: BreadcrumbItem[];
}