import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCard } from './article-card';

describe('ArticleCard', () => {
  let component: ArticleCard;
  let fixture: ComponentFixture<ArticleCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
