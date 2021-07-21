import { Component, OnInit } from '@angular/core';
import { ModuleServiceService } from 'src/app/service/module/module-service.service';
import { ProjectServiceService } from 'src/app/service/project/project-service.service';
import { UploadServiceService } from 'src/app/service/upload/upload-service.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  pdfSrc: String ="";
  selectedFile!: File;
  uploadedContent: String ="";
  projects: any = [];
  modules: any = [];

  constructor( private uploadServiceService: UploadServiceService,
    private projectService: ProjectServiceService,
    private moduleService: ModuleServiceService) { }

  ngOnInit(): void {

    //this.modulesLoad();
    this.projectsLoad();
  }

  url: any; //Angular 11, for stricter type
	msg = "";
	
	//selectFile(event) { //Angular 8
	selectFile(event: any) { //Angular 11, for stricter type
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;

    this.selectedFile = event.target.files[0];

    if(mimeType.match(/pdf\/*/) != null){
     this. onFileSelected();
     return;
    }else if (mimeType.match(/image\/*/) == null ) {
		 	this.msg = "Only images are supported";
		 	return;
		 }
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result; 
		}
	}

  onFileSelected() {
    let $img: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      let reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };
  
      reader.readAsArrayBuffer($img.files[0]);
    }
  }

  clearViewField(){
    this.url = null;
    this.uploadedContent = "";
    
  }

  getContentOnThatFile(){

    if(this.selectedFile.name==null) return;

    this.uploadServiceService.getTextOnUploaFile(this.selectedFile).
    subscribe(result => {
      console.log(result)
         
      this.uploadedContent =result['data'];

    });
  }

  projectsLoad(){

    this.projectService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }

//   modulesLoad(){

//     this.moduleService.getModules().subscribe((data) => {
//       this.modules = data;
//    });
// }

loadModules(event:any){
  console.log(event.target.value);
  let projectId = event.target.value;
  this.moduleService.getModulesByProjectId(projectId).subscribe((data) => {
    this.modules = data;
  });

}

  uploadFileToDMS(uploadData:any){
    uploadData.uploadFile = this.selectedFile;
    console.log("===>"+ uploadData);

    this.uploadServiceService.uploadFile(uploadData).
    subscribe(result => {
      console.log(result)
         
      this.uploadedContent =result['data'];

    });
  }



}
