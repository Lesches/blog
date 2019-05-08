import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menu: MenuItem[];
  loggedIn = false;

  ngOnInit() {
    this.menu = [
      {label: 'Home', icon: 'pi pi-home', routerLink: '/'}
    ];
  }

  onLog(e) {
    console.log(e);
  }
}
