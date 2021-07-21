import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './home/index/index.component';
import { LayoutComponent } from './home/layout/layout.component';

const routes: Routes = [
  {
  path:'', component:IndexComponent
  },
  //  {
  //    path:'layout', component:LayoutComponent
  //     }
      //,
     //,
     { path: 'layout',   
       loadChildren: () => import(`./home/layout/layout.module`).then(m => m.LayoutModule) },
     //,
    // {
    //   path:'createModule', component:CreateFolderComponent
    //   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
