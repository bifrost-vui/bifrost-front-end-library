import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WefwfComponent } from './wefwf.component';

describe('WefwfComponent', () => {
  let component: WefwfComponent;
  let fixture: ComponentFixture<WefwfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WefwfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WefwfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
