import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './routing';


import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { CricketersComponent } from './components/cricketers/cricketers.component';
import { BindingComponent } from './components/binding/binding.component';
import { CricketerViewComponent } from './components/cricketers/cricketer-view/cricketer-view.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    CricketersComponent,
    BindingComponent,
    CricketerViewComponent,
    HomeComponent,
    LayoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
