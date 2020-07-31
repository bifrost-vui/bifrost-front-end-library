import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WefwfweComponent } from './wefwfwe.component';

describe('WefwfweComponent', () => {
  let component: WefwfweComponent;
  let fixture: ComponentFixture<WefwfweComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WefwfweComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WefwfweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
