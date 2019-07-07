import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  menusearchvalue: string;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(menusearchvalue: string): boolean {
    return false;
  }
}
