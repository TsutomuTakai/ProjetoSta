import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowActualComponent } from './show-actual.component';

describe('ShowActualComponent', () => {
  let component: ShowActualComponent;
  let fixture: ComponentFixture<ShowActualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowActualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
