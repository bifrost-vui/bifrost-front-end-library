import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDropdownMenuComponent } from './input-dropdown-menu.component';

describe('InputDropdownMenuComponent', () => {
    let component: InputDropdownMenuComponent;
    let fixture: ComponentFixture<InputDropdownMenuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ InputDropdownMenuComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputDropdownMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
