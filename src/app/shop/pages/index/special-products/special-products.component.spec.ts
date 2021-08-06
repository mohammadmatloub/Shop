import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialProductsComponent } from './special-products.component';

describe('SpecialProductsComponent', () => {
  let component: SpecialProductsComponent;
  let fixture: ComponentFixture<SpecialProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
