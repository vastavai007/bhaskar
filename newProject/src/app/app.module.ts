import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ParticeComponent } from './pages/partice/partice.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsComponent } from './forms/forms.component';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { CurdOprationComponent } from './pages/curd-opration/curd-opration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    ParticeComponent,
    ProfileComponent,
    FormsComponent,
    ClientComponent,
    CurdOprationComponent,
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,FormsModule, ReactiveFormsModule,BrowserAnimationsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
