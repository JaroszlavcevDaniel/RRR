import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentService } from '../../services/content-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  content$!: Observable<any>;

  constructor(private contentService: ContentService) {
    this.content$ = this.contentService.getContent();
  }
}