import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualEvaluationComponent } from './components/actual-evaluation/actual-evaluation.component';
import { AnswerFormComponent } from './components/answer-form/answer-form.component';
import { EvaluationRoutingModule } from '@app/modules/evaluation';

@NgModule({
  imports: [
    CommonModule,
    EvaluationRoutingModule
  ],
  declarations: [ActualEvaluationComponent,
                AnswerFormComponent]
})
export class EvaluationModule { }
