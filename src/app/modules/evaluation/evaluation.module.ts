import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowActualComponent } from './components/show-actual/show-actual.component';
import { ShowAnswerFormComponent } from './components/show-answer-form/show-answer-form.component';
import { EvaluationRoutingModule } from '@app/modules/evaluation';

@NgModule({
  imports: [
    CommonModule,
    EvaluationRoutingModule
  ],
  declarations: [ShowActualComponent,
                ShowAnswerFormComponent]
})
export class EvaluationModule { }
