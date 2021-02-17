import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit{

  status: boolean = false;
  defaultPage = '/home';


  navigation = [
    {routerL: '/home', name: 'Home'},
    {routerL: '/about', name: 'About Me'},
    {routerL: '/work', name: 'My Work'},
    {routerL: '/contact', name: 'How To Reach Me'}
  ];

  ngOnInit(): void {
  }



}




