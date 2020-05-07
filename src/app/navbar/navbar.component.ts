import {Component, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild(MatMenuTrigger) matMenuTrigger: MatMenuTrigger;

  constructor() { }

  ngOnInit(): void {
  }

  openMyMenu(): void {
    this.matMenuTrigger.openMenu();

  }
  closeMyMenu(): void {
    this.matMenuTrigger.closeMenu();
  }


}
