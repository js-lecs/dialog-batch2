import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
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
import { CricketerViewDeactivateGurad } from './gurads/deactivate.guard';
import { TaskFormComponent } from './components/tasks/task-form/task-form.component';
import { ErrorHandlerComponent } from './components/error-handler/error-handler.component';
import { TaskService } from './services/task.service';
import { TaskListComponent } from './components/tasks/task-list/task-list.component';

import { NgDatepickerModule } from 'ng2-datepicker';
import { FilterPipe } from './pipes/filter.pipe';

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
    EditCricketerQueryParamComponent,
    TaskFormComponent,
    ErrorHandlerComponent,
    TaskListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpModule,
    NgDatepickerModule
  ],
  providers: [
    CricketerService,
    LoginActivateGuard,
    CricketerViewDeactivateGurad,
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
