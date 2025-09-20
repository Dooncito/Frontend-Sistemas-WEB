import { ComponentFixture, TestBed } from '@angular/core/testing';

import { checkoutComponent } from './checkout.component';

describe('CheackautComponent', () => {
  let component: checkoutComponent;
  let fixture: ComponentFixture<checkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [checkoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(checkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
