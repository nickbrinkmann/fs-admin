import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  {
    path: "dashboard",
    component: DashBoardComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "users",
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
