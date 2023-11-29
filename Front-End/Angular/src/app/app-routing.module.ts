
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgChartsModule } from 'ng2-charts/public_api';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { CompleteNavbarComponent } from './complete-navbar/complete-navbar.component';




import { DeleteCommentComponent } from './delete-comment/delete-comment.component';
import { ChangeThemeComponent } from './change-theme/change-theme.component';
import { ValidateProjectsComponent } from './validate-project/validate-project.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'admin-auth', component: AdminAuthComponent },
  {
    path: 'complete-navbar',component: CompleteNavbarComponent,
   
  },
  {path:'dashboard',component:DashboardComponent},
  { path: 'delete-comment',component: DeleteCommentComponent},

 
  
  
  
  {path: 'change-theme',component:ChangeThemeComponent},
  {path: 'validate-projects',component:ValidateProjectsComponent},
 { path: 'navbar',component:MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
