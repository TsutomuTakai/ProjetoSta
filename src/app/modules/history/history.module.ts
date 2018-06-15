import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowHistoryFormComponent } from './components/show-history-form/show-history-form.component';
import { ShowHistoryComponent } from './components/show-history/show-history.component';

import { HistoryRoutingModule } from '@app/modules/history/history-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HistoryRoutingModule
  ],
  declarations: [ShowHistoryFormComponent, ShowHistoryComponent]
})
export class HistoryModule { }
