import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';



export class LoginActivateGuard implements CanActivate {

    // constructor(private route: Router) {

    // }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        console.log(localStorage.getItem('loggedIn') === 'true');

        if (localStorage.getItem('loggedIn') === 'true') {
            return true;
        } else {
            // this.route.navigate(['/', 'login']);
            return false;
        }
        // check if login or not

    }

}
