import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyCard } from './technology-card';

describe('TechnologyCard', () => {
  let component: TechnologyCard;
  let fixture: ComponentFixture<TechnologyCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
