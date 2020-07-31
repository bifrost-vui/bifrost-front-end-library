import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QwdqwdComponent } from './qwdqwd.component';

describe('QwdqwdComponent', () => {
  let component: QwdqwdComponent;
  let fixture: ComponentFixture<QwdqwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QwdqwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QwdqwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
