import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltPasswordComponent } from './alt-password.component';

describe('AltPasswordComponent', () => {
  let component: AltPasswordComponent;
  let fixture: ComponentFixture<AltPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
