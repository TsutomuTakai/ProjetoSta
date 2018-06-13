import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHistoryFormComponent } from './show-history-form.component';

describe('ShowHistoryFormComponent', () => {
  let component: ShowHistoryFormComponent;
  let fixture: ComponentFixture<ShowHistoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowHistoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHistoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
