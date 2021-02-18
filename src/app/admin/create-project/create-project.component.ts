import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProjectsService} from '../../shared/projects.service';
import {Project} from '../../shared/interfaces';


@Component({
  selector: 'app-create-work',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {


  form: FormGroup;


  constructor(private projectsService: ProjectsService
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      image: new FormControl(null, Validators.required),
      link: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      github: new FormControl(null, Validators.required)
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    const project: Project = {
      image: this.form.value.image,
      github: this.form.value.github,
      name: this.form.value.name,
      link: this.form.value.link,
      date: new Date()
    };

    this.projectsService.create(project).subscribe(() => {
      this.form.reset();
    });

  }

}
