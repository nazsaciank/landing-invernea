import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[screen-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeScreen implements OnInit {

  @Input() isAdmin:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
