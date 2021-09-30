import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortageOptionsComponent } from './mortage-options.component';

describe('MortageOptionsComponent', () => {
  let component: MortageOptionsComponent;
  let fixture: ComponentFixture<MortageOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortageOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortageOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
