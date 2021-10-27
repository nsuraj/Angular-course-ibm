import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainDeskComponent } from './main-desk/main-desk.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main', component: MainDeskComponent, children:
      [
        {path: '', redirectTo: 'login', pathMatch: 'full'},
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent }
      ]
  },
  {path: 'dash' , component: UserDashboardComponent, children:
      [
        {path: '',redirectTo:'login',pathMatch:'full'},
        {path: 'board', component: DashboardContentComponent},
        {path: 'about', component:AboutComponent},
        {path: 'team', component:TeamComponent}
      ]
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }