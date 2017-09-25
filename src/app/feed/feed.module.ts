import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { MdDatepickerModule, MdInputModule, MdNativeDateModule, MdSelectModule, MdTableModule } from '@angular/material';

import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { FeedRoutes } from './feed.routing';

import { HistoricComponent } from './historic/historic.component';
import { HistoricService } from './historic/historic.service';

import { LiveComponent } from './live/live.component';

@NgModule({
  imports: [
    AngularMultiSelectModule,
    CommonModule,
    RouterModule.forChild(FeedRoutes),
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule,
    MdDatepickerModule,
    MdInputModule,
    MdNativeDateModule,
    MdSelectModule,
    MdTableModule,
    NgxDatatableModule
  ],
  declarations: [
    HistoricComponent,
    LiveComponent
  ],
  providers: [
    HistoricService,
    DatePipe
  ]
})

export class FeedModule {}
