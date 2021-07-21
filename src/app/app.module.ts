import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './home/index/index.component';
//import { LayoutComponent } from './home/layout/layout.component';
import { HeaderComponent } from './home/header/header.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { CreateProjectComponent } from './home/create-project/create-project.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CreateProjectModuleComponent } from './home/create-project-module/create-project-module.component';
import { UploadFileComponent } from './home/upload-file/upload-file.component';
import { PdfViewerComponent, PdfViewerModule } from 'ng2-pdf-viewer';
//import { PdfViewerComponent } from 'ng2-pdf-viewer';


//import { CreateFolderComponent } from './home/create-folder/create-folder.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
   // LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    CreateProjectComponent,
    CreateProjectModuleComponent,
    UploadFileComponent,
    //CreateFolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    PdfViewerModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
