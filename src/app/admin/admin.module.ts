import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {CreateProjectComponent} from './create-project/create-project.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {AuthGuard} from './shared/services/auth.guard';
import {HttpClientModule} from '@angular/common/http';
import {SearchPipe} from './shared/search.pipe';
import {EditProjectComponent} from './edit-project/edit-project.component';


@NgModule({
  declarations:
    [AdminLayoutComponent,
      LoginPageComponent,
      DashboardPageComponent,
      CreateProjectComponent,
      EditProjectComponent,
      SearchPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
          {path: 'create', component: CreateProjectComponent, canActivate: [AuthGuard]},
          {path: 'project/:id/edit', component: EditProjectComponent, canActivate: [AuthGuard]}
        ]
      }
    ])
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AdminModule {

}
