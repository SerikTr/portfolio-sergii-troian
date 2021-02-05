import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  status: boolean = true

  // TODO поработать над динамическим выводом меню
  // TODO при выборе страницы в  меню  бургере, страница переключается но меню не прячется
  // TODO можно начинать следующую страницу About
  // https://sergii-troian-portfolio.web.app/about.html
  // navigation: [
  //   {routerHome: '/', name: 'Home', id?},
  //   {routerAbout: '/about', name: 'About Me', id?},
  //   {routerWork: '/work', name: 'My Work', id: 1},
  //   {routerContact: '/contact', name: 'How To Reach Me', id?}
  //   ]


  ngOnInit(): void {

  }



}




