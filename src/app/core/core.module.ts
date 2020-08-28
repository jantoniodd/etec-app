import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { SimpleMenuComponent } from './simple-menu/simple-menu.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, UserMenuComponent, MainNavigationComponent, SimpleMenuComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [HeaderComponent, SidebarComponent],
})
export class CoreModule {}
