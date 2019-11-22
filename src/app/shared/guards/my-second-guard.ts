import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContextService } from 'src/app/services/context.service';

@Injectable()
export class MySecondGuard implements CanActivate {

  constructor(private router: Router, private service: ContextService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    const currentUser = this.service.getCurrentUser();

    if (currentUser !== null && currentUser.position === 'Developer') {
      return of(true);
    }
    this.router.navigate(['login']);
    return of(false);
  }
}
