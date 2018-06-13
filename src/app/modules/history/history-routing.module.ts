import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowHistoryComponent } from '@app/modules/history/components/show-history/show-history.component';
import { ShowHistoryFormComponent } from '@app/modules/history/components/show-history-form/show-history-form.component';

//Components


const routes: Routes = [
  {
    path: '',
    component: ShowHistoryComponent
  },
  {
    path: 'viewForm',
    component: ShowHistoryFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
