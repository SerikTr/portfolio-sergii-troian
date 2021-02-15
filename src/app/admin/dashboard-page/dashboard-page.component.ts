import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProjectsService} from '../shared/projects.service';
import {Project} from '../shared/interfaces';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  projects: Project[] = []
  pSub: Subscription

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.pSub = this.projectsService.getAll()
      .subscribe(projects => {
        this.projects = projects
      })
  }

  remove(id: string) {

  }

  ngOnDestroy(): void {
    if (this.pSub){
      this.pSub.unsubscribe()
    }
  }


}
