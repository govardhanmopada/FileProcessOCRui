import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModuleServiceService } from 'src/app/service/module/module-service.service';
import { ProjectServiceService } from 'src/app/service/project/project-service.service';
import { ModuleModel } from '../model/module';

@Component({
  selector: 'app-create-project-module',
  templateUrl: './create-project-module.component.html',
  styleUrls: ['./create-project-module.component.css']
})
export class CreateProjectModuleComponent implements OnInit {

  projects: any = [];
  modules: any = [];
  projectNodeId:String="";

  displayedColumns = ['projectId', 'moduleId', 'moduleName', 'moduleDesc', 'nodeId' , 'parentNodeId'];
  

  dataSource = new MatTableDataSource<ModuleModel>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort)  sort!: MatSort;

  constructor(private projectService: ProjectServiceService,
    private moduleService: ModuleServiceService
    ) { }

  ngOnInit(): void {
    this.modulesLoad();
    this.projectsLoad();
  }

  submitPrjectModuleCreate(moduleData:any){
    console.log(moduleData);
     this.moduleService.createModule(moduleData).
     subscribe(result => {
       console.log(result)
      //this.createProjectForm.reset();
       //this.projectsLoad();

    });
    
  }

  
  
  modulesLoad(){

      this.moduleService.getModules().subscribe((data) => {
        this.dataSource.data = data;
     });
 }

 projectsLoad(){

  this.projectService.getProjects().subscribe((data) => {
    this.projects = data;
  });
}
}
