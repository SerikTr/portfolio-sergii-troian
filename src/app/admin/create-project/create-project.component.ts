import {Component,  OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProjectsService} from '../../shared/projects.service';
import {Project} from '../../shared/interfaces';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AngularFireStorage} from '@angular/fire/storage';



@Component({
  selector: 'app-create-work',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {


  form: FormGroup
  selectedFile: File = null



  constructor(private projectsService: ProjectsService,
              private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      image: new FormControl(null, Validators.required),
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
      image: this.form.value.image,
      github: this.form.value.github,
      name: this.form.value.name,
      link: this.form.value.link,
      date: new Date()
    }

    this.projectsService.create(project).subscribe(() => {
      this.form.reset()
    })

  }


  //TODO add loading file with helping storage firebase

  // onFileSelected(event) {
  //   this.selectedFile = <File>event.target.files[0]
  // }


  // onUpload() {
  //   console.log(this.selectedFile);
  //   this.storage.upload("/files/" + this.selectedFile.name, this.selectedFile)
  // }
}
