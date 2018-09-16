import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from '../../../shared/models/prestation-m';
import { Observable, Subscription, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit, OnDestroy {
  // public collection: Prestation[];
  public collection$: Observable<Prestation[]>;
  public listHeaders: string[];
  public message$: Subject<string>;
  public faPlusCircle = faPlusCircle;
  // private sub: Subscription;
  // public addPresta = {libelle: 'Add prestation', route: '/prestations/add'};
  constructor(
    private prestationService: PrestationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.collection$ = this.prestationService.collection$;
    // this.sub = this.prestationService.collection.subscribe((data) => {
    //   console.log('subscribe');
    //   this.collection = data;
    // });
    this.message$ = this.prestationService.message$;
    this.listHeaders = [
      'Type',
      'Client',
      'Nb Jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'Action',
      'Delete'
    ];
  }

  public edit(presta: Prestation): void {
    this.router.navigate(['prestations/edit', presta.id]);
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

}
