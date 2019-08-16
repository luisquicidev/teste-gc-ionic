import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import {MdcButtonModule, MdcCardModule, MdcFormFieldModule, MdcIconModule, MdcTextFieldModule} from '@angular-mdc/web';
import {SpacerComponent} from '../../components/spacer/spacer.component';
import {CenterComponent} from '../../components/center/center.component';
import {DividerComponent} from '../../components/divider/divider.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        MdcCardModule,
        MdcFormFieldModule,
        MdcTextFieldModule,
        MdcButtonModule,
        MdcIconModule
    ],
    declarations: [LoginPage, SpacerComponent, CenterComponent, DividerComponent]
})
export class LoginPageModule {}
