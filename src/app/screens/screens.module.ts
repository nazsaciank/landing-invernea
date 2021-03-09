import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeScreen } from './home/home.component';
import { ContainersModule } from '../containers/containers.module';
import { LoginScreen } from './login/login.component';
import { AdminScreen } from './admin/admin.component';

@NgModule({
  imports: [
    CommonModule,
    ContainersModule
  ],
  declarations: [
    HomeScreen,
    LoginScreen,
    AdminScreen
  ],
})
export class ScreensModule { }
