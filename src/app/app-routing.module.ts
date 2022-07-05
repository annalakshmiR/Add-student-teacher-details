import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ExampleComponent } from './example/example.component';
const routes: Routes = [
  
  {path:'dashboard',component:DashboardComponent},
  {path:'example',component:ExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
