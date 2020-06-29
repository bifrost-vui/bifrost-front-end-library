import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndLibraryComponent } from './front-end-library.component';

describe('FrontEndLibraryComponent', () => {
  let component: FrontEndLibraryComponent;
  let fixture: ComponentFixture<FrontEndLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontEndLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontEndLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
