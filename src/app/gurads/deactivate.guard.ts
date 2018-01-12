import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CricketerViewComponent } from '../components/cricketers/cricketer-view/cricketer-view.component';
import { EditCricketerComponent } from '../components/cricketers/edit-cricketer/edit-cricketer.component';

export class CricketerViewDeactivateGurad implements CanDeactivate<EditCricketerComponent> {
    canDeactivate(component: EditCricketerComponent,
        currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): boolean {
        if (component.isDirty()) {
            const response = confirm('There are unsaved Changes. Do you want to continue?');
            if (response) {
                return confirm('Are you completely sure?');
            } else {
                return true;
            }
        } else {
            return true;
        }
    }
}
