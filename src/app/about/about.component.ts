import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  sayHello = 'Hi! My name is Sergey.'
  aboutMe = 'In the fall of 2019, I decided to fulfill my childhood dream to become a programmer.\n' +
    '        Having devoted a lot of time to training, I mastered the basic skills of the front end.\n' +
    '        I learned the principles of HTML, CSS, Javascript and dived into the direction of learning\n' +
    '        and practical application of the Angular framework. I like what I do and what\n' +
    '        direction I am going. I would be glad to share\n' +
    '        my work with you and hear comments from people who know the front end from the inside.'

  technologies = [
    {name: 'HTML', link: 'https://en.wikipedia.org/wiki/HTML',
      image: '../../assets/img/html-logo.jpg', namePage: 'HTML',
      description: 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.' },
    {name: 'CSS', link: 'https://www.w3schools.com/css/css_intro.asp',
      image: '../../assets/img/css3-logo.jpg', namePage: 'CSS',
      description: 'CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.' },
    {name: 'Javascript', link: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript' ,
      image: '../../assets/img/javascript-logo.jpg', namePage: 'Javascript',
      description: 'JavaScript is a scripting or programming language that allows you to implement complex features on web pages.' },
    {name: 'Angular 9', link: 'https://angular.io/',
      image: '../../assets/img/angular-logo.jpg', namePage: 'Angular',
      description: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript.' },
    {name: 'RxJs', link: 'https://rxjs-dev.firebaseapp.com/guide/overview' ,
      image: '../../assets/img/rxjs-logo.jpg', namePage: 'RxJs',
      description: 'Is a library for reactive programming using observables that makes it easier to compose asynchronous or callback-based code.' },
    {name: 'NodeJS', link: 'https://nodejs.org/en/' ,
      image: '../../assets/img/nodejs-npm-logo.jpg', namePage: 'NodeJs',
      description: 'A software platform based on the V8 engine (translating JavaScript into machine code) that transforms JavaScript from a highly specialized language into a general-purpose language.' },
    {name: 'SASS', link: 'https://sass-lang.com/' ,
      image: '../../assets/img/sass-logo.jpg', namePage: 'SASS',
      description: 'Is a CSS preprocessor, which adds special features such as variables, nested rules and mixins (sometimes referred to as syntactic sugar) into regular CSS.' },


    ]


  constructor() { }


  ngOnInit(): void {
  }

}
