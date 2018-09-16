import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Prestation } from '../../shared/models/prestation-m';
import { Observable } from 'rxjs';
import { PrestationService } from './prestation.service';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrestationResolverService implements Resolve<any> {

  constructor(
    private prestationService: PrestationService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const id = route.paramMap.get('id');
    return this.prestationService.getPrestation(id).pipe(
      take(1),
      map(data => {
        if (data) {
          return data;
        } else { // id not found
          this.router.navigate(['/prestations']);
          return null;
        }
      })
    );

  }
}
