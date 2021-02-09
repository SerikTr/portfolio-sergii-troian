import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MainLayoutComponent} from './shared/main-layout/main-layout.component';
import {AboutComponent} from './about/about.component';
import {WorkComponent} from './work/work.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'work', component: WorkComponent},
      {path: 'contact', component: ContactComponent}
    ]
  },
  {
    path: 'admin', loadChildren:  () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
