import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FbCreateResponse, Project} from './interfaces';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ProjectsService {

  constructor(private http: HttpClient) {
  }

  create(project: Project): Observable<Project>{
    return this.http.post<Project>(`${environment.fbDbUrl}/project.json`, project)
      .pipe(map((response: FbCreateResponse) => {
          return {
            ...project,
            id: response.name,
            date: new Date(project.date)
          }
      }))
  }

  getAll(): Observable<Project[]>{
    return this.http.get(`${environment.fbDbUrl}/project.json`)
      .pipe(map((response:{[key: string]: any}) => {
        return  Object
          .keys(response)
          .map( key => ({
            ...response[key],
            id: key,
            date: new Date(response[key].date)
          }))
      }))
  }

}
