import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlowerComponent } from '../flower/flower.component';
import { AddFlowerComponent } from '../add-flower/add-flower.component';
import { FlowerDetailsComponent } from '../flower-details/flower-details.component';

const routes: Routes = [
  {
    path: 'flowers',
    component: FlowerComponent
  },
  {
    path: 'flower/add',
    component: AddFlowerComponent
  },
  {
    path: 'flowers/:id',
    component: FlowerDetailsComponent
  },
  {
    path: '',
    redirectTo: 'flowers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
