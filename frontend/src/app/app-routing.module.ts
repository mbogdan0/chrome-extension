import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponentComponent} from "./components/main-component/main-component.component";
import {SecondaryComponentComponent} from "./components/secondary-component/secondary-component.component";



const routes: Routes = [
  {
    path: '',
    component: MainComponentComponent
  },
  {
    path: 'secondary',
    component: SecondaryComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
