import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {AadharPageComponent } from '../../aadhar-page/aadhar-page.component';
import {IdentityverifyComponent } from '../../identityverify/identityverify.component';
import {SummaryComponent } from '../../summary/summary.component';
import {VerificationstatusComponent } from '../../verificationstatus/verificationstatus.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatRadioModule,
        MatButtonToggleModule,
        MatProgressSpinnerModule,
    ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    AadharPageComponent,
    IdentityverifyComponent,
    SummaryComponent,
    VerificationstatusComponent,
  ]
})

export class AdminLayoutModule {}
