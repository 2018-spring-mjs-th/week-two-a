import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HniesenPizzaToppingsComponent } from './hniesen-pizza-toppings.component';

describe('HniesenPizzaToppingsComponent', () => {
    let component: HniesenPizzaToppingsComponent;
    let fixture: ComponentFixture<HniesenPizzaToppingsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ HniesenPizzaToppingsComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HniesenPizzaToppingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
