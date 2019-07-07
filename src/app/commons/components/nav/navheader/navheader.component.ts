import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navheader',
  templateUrl: './navheader.component.html',
  styleUrls: ['./navheader.component.css']
})
export class NavheaderComponent implements OnInit {
  brand: string = 'Edureka';
  constructor() { }

  ngOnInit() {
  }

}
