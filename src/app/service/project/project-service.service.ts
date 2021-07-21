import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProjectModel } from 'src/app/home/model/projectModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  private projetcUrl= "http://localhost:9091/";

   

  constructor(private httpClient: HttpClient) { }

  public createProject(projectModel :ProjectModel){
    let projectModelListV: ProjectModel[] = [];
    projectModelListV.push(projectModel);
    return this.httpClient.post<ProjectModel>(this.projetcUrl+"creteProject",projectModelListV);
  }

  getProjects(): Observable<ProjectModel[]> {
    return this.httpClient.get<ProjectModel[]>(this.projetcUrl + 'projects');
  }

}
