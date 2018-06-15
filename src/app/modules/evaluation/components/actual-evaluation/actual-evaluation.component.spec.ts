import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualEvaluationComponent } from './actual-evaluation.component';

describe('ActualEvaluationComponent', () => {
  let component: ActualEvaluationComponent;
  let fixture: ComponentFixture<ActualEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
