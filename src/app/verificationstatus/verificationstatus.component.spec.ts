import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationstatusComponent } from './verificationstatus.component';

describe('VerificationstatusComponent', () => {
  let component: VerificationstatusComponent;
  let fixture: ComponentFixture<VerificationstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
