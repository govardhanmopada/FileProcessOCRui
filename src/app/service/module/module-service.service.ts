import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModuleModel } from 'src/app/home/model/module';

@Injectable({
  providedIn: 'root'
})
export class ModuleServiceService {

  private projetcUrl= "http://localhost:9091/";

   

  constructor(private httpClient: HttpClient) { }

  public createModule(moduleModel :ModuleModel){
    let moduleModelListV: ModuleModel[] = [];
    moduleModelListV.push(moduleModel);
    return this.httpClient.post<ModuleModel>(this.projetcUrl+"creteModule",moduleModelListV);
  }

  getModules(): Observable<ModuleModel[]> {
    return this.httpClient.get<ModuleModel[]>(this.projetcUrl + 'modules');
  }

  getModulesByProjectId(projectID:any): Observable<ModuleModel[]> {
    return this.httpClient.get<ModuleModel[]>(this.projetcUrl + 'FindModulesByProjectId/'+projectID);
  }

}
