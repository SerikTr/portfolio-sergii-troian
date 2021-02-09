import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  icons = [
    {iconLink: 'https://twitter.com/Sergii75310096',
      src: '../../assets/img/social-icons/twitter-3-32.png', alt: 'tweeter-icon'},
    {iconLink: 'https://www.facebook.com/profile.php?id=100009853779141&sk=',
      src: '../../assets/img/social-icons/facebook-2-32.png', alt: 'facebook-icon'},
    {iconLink: 'https://www.linkedin.com/in/sergii-troian-20639113a/',
      src: '../../assets/img/social-icons/linkedin-3-32.png', alt: 'linkedin-icon'},
    {iconLink: 'https://github.com/SerikTr',
      src: '../../assets/img/social-icons/github-8-32.png', alt: 'github-icon'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
