import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('Hi from App Component!');
  }
}
