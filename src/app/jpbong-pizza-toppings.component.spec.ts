import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpbongPizzaToppingsComponent } from './jpbong-pizza-toppings.component';

describe('JpbongPizzaToppingsComponent', () => {
    let component: JpbongPizzaToppingsComponent;
    let fixture: ComponentFixture<JpbongPizzaToppingsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ JpbongPizzaToppingsComponent ]
        })
        .compileComponents();
    }));
    
    beforeEach(() => {
        fixture = TestBed.createComponent(JpbongPizzaToppingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    it('should create', () => {
        expect(component).toBeTruthy();
    });
})