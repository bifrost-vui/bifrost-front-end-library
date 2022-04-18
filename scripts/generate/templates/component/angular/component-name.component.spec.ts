import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { %ComponentName%Component } from './%component-name%.component';

describe('%ComponentName%Component', () => {
    let component: %ComponentName%Component;
    let fixture: ComponentFixture<%ComponentName%Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ %ComponentName%Component ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(%ComponentName%Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
