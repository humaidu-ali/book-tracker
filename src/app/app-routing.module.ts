import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddReaderComponent } from './pages/add-reader/add-reader.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
{path:'reader',component:AddReaderComponent},
{path:'book',component:AddBookComponent},
{path:'dashboard',component:DashboardComponent},
{path:'home',component:HomeComponent },
{path: '', redirectTo:'/home',pathMatch:'full'},

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports: [
    RouterModule
],
})
export class AppRoutingModule { }
