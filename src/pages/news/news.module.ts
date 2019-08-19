import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewsPage } from './news.page';
import {MdcButtonModule, MdcCardModule, MdcIconButtonModule, MdcTypographyModule} from "@angular-mdc/web";

const routes: Routes = [
  {
    path: '',
    component: NewsPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        MdcCardModule,
        MdcButtonModule,
        MdcTypographyModule,
        MdcIconButtonModule
    ],
  declarations: [NewsPage]
})
export class NewsPageModule {}
