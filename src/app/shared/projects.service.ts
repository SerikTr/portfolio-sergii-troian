import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {FbCreateResponse, Project} from './interfaces';
import {environment} from '../../environments/environment';
import {catchError, map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ProjectsService {

  constructor(private http: HttpClient) {
  }

  create(project: Project): Observable<Project> {
    return this.http.post<Project>(`${environment.fbDbUrl}/project.json`, project)
      .pipe(map((response: FbCreateResponse) => {
        return {
          ...project,
          id: response.name,
          date: new Date(project.date)
        };
      }), catchError((err) => {
        console.log('Error create method: ', err);
        return throwError(err);
      }));
  }

  getAll(): Observable<Project[]> {
    return this.http.get(`${environment.fbDbUrl}/project.json`)
      .pipe(map((response: { [key: string]: any }) => {
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key,
            date: new Date(response[key].date)
          }));
      }), catchError((err) => {
        console.log('Error get method: ', err);
        return throwError(err);
      }));
  }

  getById(id: string): Observable<Project> {
    return this.http.get<Project>(`${environment.fbDbUrl}/project/${id}.json`)
      .pipe(map((project: Project) => {
        return {
          ...project, id,
          date: new Date(project.date)
        };
      }));
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.fbDbUrl}/project/${id}.json`);
  }

  update(project: Project): Observable<Project> {
    return this.http.patch<Project>(`${environment.fbDbUrl}/project/${project.id}.json`, project);
  }
}
