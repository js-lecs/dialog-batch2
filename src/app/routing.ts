import { Routes } from '@angular/router';
import { CricketersComponent } from './components/cricketers/cricketers.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';



export const APP_ROUTES: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'app',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'cricketers',
                component: CricketersComponent
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/app/home'
            }
        ]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login'
    }
];
