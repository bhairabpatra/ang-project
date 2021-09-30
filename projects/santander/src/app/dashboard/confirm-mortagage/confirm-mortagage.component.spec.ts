import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmMortagageComponent } from './confirm-mortagage.component';

describe('ConfirmMortagageComponent', () => {
  let component: ConfirmMortagageComponent;
  let fixture: ComponentFixture<ConfirmMortagageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmMortagageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmMortagageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
