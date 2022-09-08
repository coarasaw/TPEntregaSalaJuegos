import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-gral',
  templateUrl: './pie-gral.component.html',
  styleUrls: ['./pie-gral.component.css']
})
export class PieGralComponent implements OnInit {
  anio = getFullYear();
  
  constructor() { }

  ngOnInit(): void {
  }

}
function getFullYear() {
  var currentTime = new Date();
  var year = currentTime.getFullYear();
  return year;
}

