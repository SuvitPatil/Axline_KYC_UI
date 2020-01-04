import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  public themeColor: String;
  public headerColor: String;

  constructor() {}

  ngOnInit() {
    this.themeColor = 'Light';
    this.headerColor = 'Purple';
  }
}
