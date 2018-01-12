import { Routes } from '@angular/router';
import { CricketersComponent } from './components/cricketers/cricketers.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CricketerViewComponent } from './components/cricketers/cricketer-view/cricketer-view.component';
import { EditCricketerComponent } from './components/cricketers/edit-cricketer/edit-cricketer.component';
import { EditCricketerQueryParamComponent } from './components/cricketers/edit-cricketer-query-param/edit-cricketer-query-param.component';
import { LoginActivateGuard } from './gurads/login.guard';
import { CricketerViewDeactivateGurad } from './gurads/deactivate.guard';
import { TaskFormComponent } from './components/tasks/task-form/task-form.component';

const LAYOUT_ROUTES: Routes = [{
    path: 'home',
    component: HomeComponent
},
{
    path: 'cricketers',
    component: CricketersComponent
},
{
    path: 'tasks',
    component: TaskFormComponent
},
{
    path: 'cricketers/queryParams',
    component: EditCricketerQueryParamComponent
},
{
    path: 'cricketers/:id',
    component: EditCricketerComponent,
    canDeactivate: [CricketerViewDeactivateGurad]
},

{
    path: '',
    pathMatch: 'full',
    redirectTo: '/app/home'
}];

export const APP_ROUTES: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'app',
        component: LayoutComponent,
        children: LAYOUT_ROUTES,
        canActivate: [LoginActivateGuard]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login'
    }
];
