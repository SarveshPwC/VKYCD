import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AadharPageComponent } from './aadhar-page.component';

describe('AadharPageComponent', () => {
  let component: AadharPageComponent;
  let fixture: ComponentFixture<AadharPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AadharPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AadharPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
