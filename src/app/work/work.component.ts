import {Component, OnInit} from '@angular/core';
import {ProjectsService} from '../shared/projects.service';
import {Observable} from 'rxjs';
import {Project} from '../shared/interfaces';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  projects$: Observable<Project[]>;
  image = '../../assets/img/projects/project1.jpg';


  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit(): void {
    this.loader();

  }


  loader() {
    setTimeout(() => {
      this.projects$ = this.projectsService.getAll();
    }, 1500);
  }

}
