import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  private projetcUrl= "http://localhost:9091/";

   

  constructor(private httpClient: HttpClient) { }

  public getTextOnUploaFile(selectedFile :File){  
    const formdata: FormData = new FormData();
    formdata.append('file', selectedFile);
        return this.httpClient.post<any>(this.projetcUrl+"textReadFromFile",formdata);
  }


  public uploadFile(uploadData:any){  
    const formdata: FormData = new FormData();
    formdata.append('uploadFile',uploadData.uploadFile );
    formdata.append('moduleId',uploadData.moduleId );
    formdata.append('projectId',uploadData.projectId );
    formdata.append('file',uploadData.file );
    
        return this.httpClient.post<any>(this.projetcUrl+"uploadFileInSpecificLoc",formdata);
  }

}
