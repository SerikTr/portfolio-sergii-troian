import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProjectsService} from '../../shared/projects.service';
import {Project} from '../../shared/interfaces';
import { Subscription} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {


  projects: Project[] = []
  pSub: Subscription
  dSub: Subscription
  searchStr = ''
  error = false


  constructor(private projectsService: ProjectsService,
              private storage: AngularFireStorage
              ) { }

  ngOnInit(): void {
    this.getProject()
  }

  getProject(){
    this.pSub = this.projectsService.getAll()
      .subscribe(projects => {
        this.projects = projects
        }, error => {
        console.log('Error get: ', error);
        this.error = true
      })
      }


  remove(id: string) {
   this.dSub = this.projectsService.remove(id)
      .subscribe(() => {
        this.projects = this.projects.filter(project => project.id !== id)
      })
  }

  ngOnDestroy(): void {
    if (this.pSub){
      this.pSub.unsubscribe()
    }
    if(this.dSub){
      this.dSub.unsubscribe()
    }
  }



}
