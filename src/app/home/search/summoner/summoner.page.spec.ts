import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonerPage } from './summoner.page';

describe('SummonerPage', () => {
  let component: SummonerPage;
  let fixture: ComponentFixture<SummonerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummonerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
