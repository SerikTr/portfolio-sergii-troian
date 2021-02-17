import {Pipe, PipeTransform} from '@angular/core';
import {Project} from '../../shared/interfaces';

@Pipe({
  name: 'searchProject'
})
export class SearchPipe implements PipeTransform{
  transform(projects: Project[], search = ''): Project[] {
    if(!search.trim()){
      return projects
    }
    return projects.filter(project => {
      return project.name.toLowerCase().includes(search.toLowerCase())
    })
  }
}
