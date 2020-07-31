import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WqdqwComponent } from './wqdqw.component';

describe('WqdqwComponent', () => {
  let component: WqdqwComponent;
  let fixture: ComponentFixture<WqdqwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WqdqwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WqdqwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
