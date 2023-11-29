
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { FormsModule } from '@angular/forms';

import { DeleteCommentComponent } from './delete-comment/delete-comment.component';
import { ChangeThemeComponent } from './change-theme/change-theme.component';

import { ValidateProjectsComponent } from './validate-project/validate-project.component';


import { NavbarComponent } from './navbar/navbar.component';
import { CompleteNavbarComponent } from './complete-navbar/complete-navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminAuthComponent,
  
    DeleteCommentComponent,
    ChangeThemeComponent,
    
    ValidateProjectsComponent,
    
   
    NavbarComponent,
    CompleteNavbarComponent,
    MainPageComponent,
    DashboardComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
