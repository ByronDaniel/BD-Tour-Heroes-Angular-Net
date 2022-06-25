import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesTopComponent } from './heroes-top.component';

describe('HeroesTopComponent', () => {
  let component: HeroesTopComponent;
  let fixture: ComponentFixture<HeroesTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
