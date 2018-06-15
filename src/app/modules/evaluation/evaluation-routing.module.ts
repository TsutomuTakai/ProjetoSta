import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components
import { ActualEvaluationComponent, AnswerFormComponent } from '@app/modules/evaluation';

const routes: Routes = [
  {
    path: '',
    component: ActualEvaluationComponent
  },
  {
    path: 'showForm',
    component: AnswerFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluationRoutingModule { }
