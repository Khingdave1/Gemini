import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendComponent } from 'src/app/modules/dashboard/send/send.component';
import { ReceiveComponent } from 'src/app/modules/dashboard/receive/receive.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { OverviewComponent } from 'src/app/modules/dashboard/overview/overview.component';



@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    SendComponent,
    ReceiveComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class DashboardModule { }
