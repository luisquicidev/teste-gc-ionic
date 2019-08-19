import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventsPage } from './events.page';
import {MdcCardModule, MdcIconModule, MdcTopAppBarModule} from "@angular-mdc/web";

const routes: Routes = [
  {
    path: '',
    component: EventsPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        MdcTopAppBarModule,
        MdcIconModule,
        MdcCardModule
    ],
  declarations: [EventsPage]
})
export class EventsPageModule {}
