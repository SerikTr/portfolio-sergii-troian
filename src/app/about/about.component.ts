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
    {name: 'HTML', link: 'https://en.wikipedia.org/wiki/HTML' ,
      image: '../../assets/img/html-logo.jpg', namePage: 'HTML',
      description: 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.' },
    {name: 'HTML', link: 'https://en.wikipedia.org/wiki/HTML' ,
      image: '../../assets/img/html-logo.jpg', namePage: 'HTML',
      description: 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.' },
    {name: 'HTML', link: 'https://en.wikipedia.org/wiki/HTML' ,
      image: '../../assets/img/html-logo.jpg', namePage: 'HTML',
      description: 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.' },
    {name: 'HTML', link: 'https://en.wikipedia.org/wiki/HTML' ,
      image: '../../assets/img/html-logo.jpg', namePage: 'HTML',
      description: 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.' },
    {name: 'HTML', link: 'https://en.wikipedia.org/wiki/HTML' ,
      image: '../../assets/img/html-logo.jpg', namePage: 'HTML',
      description: 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.' },
    {name: 'HTML', link: 'https://en.wikipedia.org/wiki/HTML' ,
      image: '../../assets/img/html-logo.jpg', namePage: 'HTML',
      description: 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.' },


    ]


  constructor() { }


  ngOnInit(): void {
  }

}
