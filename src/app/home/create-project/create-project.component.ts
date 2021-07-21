import { Component, OnInit, ViewChild } from '@angular/core';

import { ProjectModel } from '../model/projectModel';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectServiceService } from 'src/app/service/project/project-service.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {NgForm} from '@angular/forms'


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  displayedColumns = ['projectId', 'projectName', 'projectDesc', 'nodeId' , 'parentNodeId'];
  

  dataSource = new MatTableDataSource<ProjectModel>();

  projects: any = [];
  createProjectForm!: NgForm;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort)  sort!: MatSort;

  constructor(private projectService :ProjectServiceService  ) {
    
   }

  ngOnInit(): void {

    setTimeout(() => this.dataSource.paginator = this.paginator);
    this.projectsLoad();
  }
  submitPrjectCreate(projectData:any){
    console.log(projectData.projectName);
    this.projectService.createProject(projectData).
    subscribe(result => {
      console.log(result)
      //this.createProjectForm.reset();
      this.projectsLoad();

    });

    
  }

  projectsLoad(){

    this.projects = this.projectService.getProjects().subscribe((data) => {
      this.dataSource.data = data;
    });
    
  }

 

  
  
}

// const ELEMENT_DATA: ProjectModel[] = [
//   { projectId: 1, projectName: 'Hydrogen', projectDesc: 'test', projectModules: 'H' },
//   { projectId: 2, projectName: 'Hydrogen', projectDesc: 'test', projectModules: 'H' },
//   { projectId: 3, projectName: 'Hydrogen', projectDesc: 'test', projectModules: 'H' },
//   { projectId: 4, projectName: 'Hydrogen', projectDesc: 'test', projectModules: 'H' },
//   { projectId: 6, projectName: 'Hydrogen', projectDesc: 'test', projectModules: 'H' },
//   { projectId: 7, projectName: 'Hydrogen', projectDesc: 'test', projectModules: 'H' },
//   { projectId: 8, projectName: 'Hydrogen', projectDesc: 'test', projectModules: 'H' },
//   { projectId: 9, projectName: 'Hydrogen', projectDesc: 'test', projectModules: 'H' }
// ];