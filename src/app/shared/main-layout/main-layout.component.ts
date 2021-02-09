import {Component, OnInit} from '@angular/core';
import {loadConfigurationFromPath} from 'tslint/lib/configuration';
import {log} from 'util';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit{

  status: boolean = true;
  defaultPage = '/home';

  windowInner


  // https://sergii-troian-portfolio.web.app/about.html
  navigation = [
    {routerL: '/home', name: 'Home'},
    {routerL: '/about', name: 'About Me'},
    {routerL: '/work', name: 'My Work'},
    {routerL: '/contact', name: 'How To Reach Me'}
  ];

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      let scrollDistance = window.scrollY
      console.log(scrollDistance);
    })

  }


  //TODO закончить со списком работ
  //TODO закончить с цветом хэдера при прокрутке
  //TODO начинать следую

  onResize(event) {
    if(event.target.innerWidth >= 768){
     return  console.log(this.windowInner = false)

    }else {
      return  console.log(this.windowInner = true);

    }
    console.log(event.target.innerWidth);
  }
}




