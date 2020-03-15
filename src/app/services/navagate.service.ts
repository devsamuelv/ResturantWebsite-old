import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavagateService {

  private $IS_MENU_SHOWING: boolean = false;

  constructor() { }

  public get isMenuActive() {
    return this.$IS_MENU_SHOWING;
  }

  public setMenuActive(val: boolean) {
    this.$IS_MENU_SHOWING = val;
  }
}
