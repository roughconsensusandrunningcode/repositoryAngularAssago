import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContextService } from 'src/app/services/context.service';

@Injectable()
export class MyFirstGuard implements CanActivate {

  constructor(private router: Router, private service: ContextService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    if (this.service.getCurrentUser() !== null) {
      return of(true);
    }
    this.router.navigate(['login']);
    return of(false);
  }
}

