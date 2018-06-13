import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAnswerFormComponent } from './show-answer-form.component';

describe('ShowAnswerFormComponent', () => {
  let component: ShowAnswerFormComponent;
  let fixture: ComponentFixture<ShowAnswerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAnswerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAnswerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
