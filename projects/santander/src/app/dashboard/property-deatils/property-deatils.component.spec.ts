import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDeatilsComponent } from './property-deatils.component';

describe('PropertyDeatilsComponent', () => {
  let component: PropertyDeatilsComponent;
  let fixture: ComponentFixture<PropertyDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyDeatilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
