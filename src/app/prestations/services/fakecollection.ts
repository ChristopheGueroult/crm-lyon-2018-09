import { Prestation } from '../../shared/models/prestation-m';

export const fakeCollection: Prestation[] = [
  new Prestation(
    {
      id: 'a1',
      typePresta: 'Formation',
      client: 'Arkesys',
      nb_jours: 2,
      tjm_ht: 500,
    },
  ),
  new Prestation (
    {
      id: 'b1',
      typePresta: 'Prestation',
      client: 'Modis',
      nb_jours: 4,
      tjm_ht: 700,
    }
  ),
];
