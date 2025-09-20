import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRecomendationComponent } from './product-recomendation.component';

describe('ProductRecomendationComponent', () => {
  let component: ProductRecomendationComponent;
  let fixture: ComponentFixture<ProductRecomendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductRecomendationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductRecomendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
