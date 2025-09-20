import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionalInfoComponent } from './adicional-info.component';

describe('AdicionalInfoComponent', () => {
  let component: AdicionalInfoComponent;
  let fixture: ComponentFixture<AdicionalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionalInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdicionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
