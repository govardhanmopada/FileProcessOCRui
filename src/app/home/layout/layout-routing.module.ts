import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateProjectModuleComponent } from '../create-project-module/create-project-module.component';
import { CreateProjectComponent } from '../create-project/create-project.component';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  
    {
      path:'', component:LayoutComponent,children:[ 
    
      { 
       path:'create-project', component:CreateProjectComponent,
      },
      { 
        path:'create-module', component:CreateProjectModuleComponent,
       },
       { 
        path:'upload-file', component:UploadFileComponent,
       },
      {
        path: '', redirectTo: 'create-project', pathMatch: 'full'
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
