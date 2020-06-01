import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';

/* import {
  AgmCoreModule
} from '@agm/core'; */
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { IdentityverifyComponent } from './identityverify/identityverify.component';
import { SummaryComponent } from './summary/summary.component';
import { VerificationstatusComponent } from './verificationstatus/verificationstatus.component';
import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import { DatePipe } from '@angular/common'
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    /* AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }) */
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
   
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
