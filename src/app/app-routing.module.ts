import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyRecordsComponent } from './company-records/company-records.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = 
[
   {path:'',component:LoginComponent},
   {path:'companydata',component:CompanyRecordsComponent,canActivate:[AuthGuardService]},
   {path:'companydata/id/:id',component:CompanyDetailsComponent,canActivate:[AuthGuardService]},
   { path: "**", redirectTo: "/" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
