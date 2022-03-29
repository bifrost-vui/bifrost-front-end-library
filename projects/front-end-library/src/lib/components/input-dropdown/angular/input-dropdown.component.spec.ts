import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDropdownComponent } from './input-dropdown.component';

describe('InputDropdownComponent', () => {
    let component: InputDropdownComponent;
    let fixture: ComponentFixture<InputDropdownComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ InputDropdownComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputDropdownComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
