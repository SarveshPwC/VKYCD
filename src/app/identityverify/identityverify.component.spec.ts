import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityverifyComponent } from './identityverify.component';

describe('IdentityverifyComponent', () => {
  let component: IdentityverifyComponent;
  let fixture: ComponentFixture<IdentityverifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityverifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
