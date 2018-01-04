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
import { CricketerService } from './services/cricketer.service';
import { EditCricketerComponent } from './components/cricketers/edit-cricketer/edit-cricketer.component';
import { EditCricketerQueryParamComponent } from './components/cricketers/edit-cricketer-query-param/edit-cricketer-query-param.component';
import { LoginActivateGuard } from './gurads/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    CricketersComponent,
    BindingComponent,
    CricketerViewComponent,
    HomeComponent,
    LayoutComponent,
    LoginComponent,
    EditCricketerComponent,
    EditCricketerQueryParamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    CricketerService,
    LoginActivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
