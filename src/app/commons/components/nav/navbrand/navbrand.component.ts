import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbrand',
  templateUrl: './navbrand.component.html',
  styleUrls: ['./navbrand.component.css'],
  inputs: [
    'brand'
  ]
})
export class NavbrandComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
