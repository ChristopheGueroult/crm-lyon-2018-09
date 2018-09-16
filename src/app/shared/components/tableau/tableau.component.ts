import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableauComponent implements OnInit {
  @Input() headers: string[];
  // @Input() lastRow: {route: string, libelle: string};
  constructor() {
  }

  ngOnInit() {
    console.log(this.headers);
  }

}
