import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankRequestComponent } from './bank-request.component';

describe('BankRequestComponent', () => {
  let component: BankRequestComponent;
  let fixture: ComponentFixture<BankRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
