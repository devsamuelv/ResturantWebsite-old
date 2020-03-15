import { Component, OnInit } from '@angular/core';
import { NavagateService } from 'src/app/services/navagate.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private nav: NavagateService) { }

  ngOnInit() {
  }

  menu() {
    this.nav.setMenuActive(true);
  }

  closeMenu() {
    this.nav.setMenuActive(false);
  }

}
