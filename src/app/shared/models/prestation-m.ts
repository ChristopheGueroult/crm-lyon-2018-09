import { PrestationI } from '../interfaces/prestation-i';
import { State } from '../enums/state.enum';

export class Prestation implements PrestationI {
  id: string;
  typePresta: string;
  client: string;
  nb_jours: number;
  taux_tva = 20;
  tjm_ht: number;
  state = State.OPTION;
  constructor(
    fields?: Partial<Prestation>
  ) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
  totalHT(): number {
    // console.log('totalHT called');
    let result = 0;
    if (this.tjm_ht && this.nb_jours) {
      result = this.tjm_ht * this.nb_jours;
    }
    return result;
  }

  totalTTC(tva?: number): number {
    // console.log('totalTTC called');
    // licence tonton arnaud v1.1
    if (!this.taux_tva) {
      this.taux_tva = 0;
    }
    const totalHt = this.totalHT();
    if (!tva) {
      tva = this.taux_tva;
    }
    if (tva <= 0) {
      tva = 0;
    }
    return totalHt + (tva * totalHt / 100);
  }
}
