import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title = 'crm prestations';
  public open = false;
  public faBars = faBars;
  public faUser = faUser;
  constructor() { }

  ngOnInit() {
  }

  public toggle(): void {
    this.open = !this.open;
  }



}
