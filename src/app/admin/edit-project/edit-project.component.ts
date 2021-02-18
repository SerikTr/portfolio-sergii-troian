import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Project} from '../../shared/interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProjectsService} from '../../shared/projects.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit-work',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit, OnDestroy {

  form: FormGroup;
  project: Project;
  submitted = false;

  uSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) {
  }

  ngOnInit(): void {
    this.editRoute();
  }

  editRoute() {
    this.route.params
      .pipe(switchMap((params: Params) => {
        return this.projectsService.getById(params['id']);
      })).subscribe((project: Project) => {
      this.project = project;
      this.form = new FormGroup({
        image: new FormControl(project.name, Validators.required),
        name: new FormControl(project.name, Validators.required),
        link: new FormControl(project.link, Validators.required),
        github: new FormControl(project.github, Validators.required)
      });
    });

  }

  ngOnDestroy() {
    this.uSub.unsubscribe();
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;

    this.uSub = this.projectsService.update({
      ...this.project,
      image: this.form.value.image,
      name: this.form.value.name,
      link: this.form.value.link,
      github: this.form.value.github
    }).subscribe(() => {
      this.submitted = false;
    });
  }
}
