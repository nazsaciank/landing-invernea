import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '[ct-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderContainer implements OnInit {

  @Input() isAdmin:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
