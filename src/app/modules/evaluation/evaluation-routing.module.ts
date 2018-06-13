import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components
import { ShowActualComponent, ShowAnswerFormComponent } from '@app/modules/evaluation';

const routes: Routes = [
  {
    path: '',
    component: ShowActualComponent
  },
  {
    path: 'showForm',
    component: ShowAnswerFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluationRoutingModule { }
