import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation-m';
import { State } from '../../../shared/enums/state.enum';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  @Input() presta: Prestation;
  public res: string;
  public states = Object.values(State);
  constructor(
    private prestationService: PrestationService
  ) {
  }

  ngOnInit() {
  }

  public update(e): void {
    // console.log(e.target.value)
    const state = e.target.value;
    // this.presta.state = state; // TODO : supp after insert code for update db
    this.prestationService.update(this.presta, state).then(() => {
      this.presta.state = state;
    });
  }

  public delete() {
    this.prestationService.delete(this.presta).then((data) => {
      this.prestationService.message$.next('Bravo mon ptit lapin !');
    });
  }

}
