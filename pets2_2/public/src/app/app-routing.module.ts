import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPetComponent } from './new-pet/new-pet.component';
import { UpdatePetComponent } from './update-pet/update-pet.component';
import { ShowPetComponent } from './show-pet/show-pet.component';
import { AllPetsComponent } from './all-pets/all-pets.component';


const routes: Routes = [
  {
    path: 'pets/new',
    component: NewPetComponent
  },
  {
    path: 'pets/:id/edit',
    component: UpdatePetComponent
  },
  {
    path: 'pets/:id',
    component: ShowPetComponent
  },
  {
    path: 'pets',
    component: AllPetsComponent
  },
  {
    path: '',
    redirectTo: 'pets', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
