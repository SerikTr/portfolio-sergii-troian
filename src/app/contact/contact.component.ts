import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  contact = [
    {name: 'Email: ', link: 'seriktr@gmail.com', href: 'mailto:seriktr@gmail.com'},
    {name: 'Phone: ', link: '+48 792 083 353', href: 'tel:+48792083353'},
    {name: 'Address: ', link: 'Warsaw city 01-001', href: 'https://www.google.com/maps/'}
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

}
