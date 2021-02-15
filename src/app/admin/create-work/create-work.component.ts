import {Component,  OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProjectsService} from '../shared/projects.service';
import {Project} from '../shared/interfaces';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';



@Component({
  selector: 'app-create-work',
  templateUrl: './create-work.component.html',
  styleUrls: ['./create-work.component.scss']
})
export class CreateWorkComponent implements OnInit {


  form: FormGroup
  selectedFile: File = null



  constructor(private projectsService: ProjectsService,
              private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      link: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      github: new FormControl(null, Validators.required)
    })
  }

  submit(){
    if (this.form.invalid){
      return
    }
    const project: Project = {
      github: this.form.value.github,
      name: this.form.value.name,
      link: this.form.value.link,
      date: new Date()
    }

    this.projectsService.create(project).subscribe(() => {
      this.form.reset()
    })

  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0]
    console.log(this.selectedFile);
  }

  onUpload() {
    const fb = new FormData()
    fb.append('image', this.selectedFile, this.selectedFile.name)
    this.http.post('gs://portfolio-sergey-troian.appspot.com', fb, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
        console.log(event);
      })
  }
}
