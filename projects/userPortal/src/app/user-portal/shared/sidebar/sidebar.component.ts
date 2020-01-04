import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  // {
  //   path: '/dashboard',
  //   title: 'Dashboard',
  //   rtlTitle: 'لوحة القيادة',
  //   icon: 'icon-chart-pie-36',
  //   class: ''
  // },
  // {
  //   path: '/icons',
  //   title: 'Icons',
  //   rtlTitle: 'الرموز',
  //   icon: 'icon-atom',
  //   class: ''
  // },
  // {
  //   path: '/maps',
  //   title: 'Maps',
  //   rtlTitle: 'خرائط',
  //   icon: 'icon-pin',
  //   class: '' },
  // {
  //   path: '/notifications',
  //   title: 'Notifications',
  //   rtlTitle: 'إخطارات',
  //   icon: 'icon-bell-55',
  //   class: ''
  // },

  {
    path: '/user',
    title: 'User Profile',
    icon: 'icon-single-02',
    class: ''
  },
  {
    path: '/editProfile',
    title: 'Edit Profile',
    icon: 'icon-puzzle-10',
    class: ''
  },
  {
    path: '/request',
    title: 'My Requests',
    icon: 'icon-align-center',
    class: ''
  },
  {
    path: '/documents',
    title: 'My Documents',
    icon: 'icon-world',
    class: ''
  },
  {
    path: '/uploadDocument',
    title: 'Upload Documents',
    icon: 'icon-atom',
    class: ''
  }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }

}
