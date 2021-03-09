import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainer } from './header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [	
    HeaderContainer
  ],
  exports: [
    HeaderContainer
  ]
})
export class ContainersModule { }
