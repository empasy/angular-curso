import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerPhotosComponent } from './pages/container-photos/container-photos.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/users/users.component';
import {DetailPhotoComponent} from "./pages/detail-photo/detail-photo.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user/:id', component: UserComponent},
  { path: 'users', component: UsersComponent },
  { path: 'photos', component: ContainerPhotosComponent },
  { path: 'photos/:id', component: DetailPhotoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// control + k + c (COMENTAR)
// control + k + u (DESCOMENTAR)
// control + }


// localhost:4200/user/
