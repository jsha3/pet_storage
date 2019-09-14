import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.css']
})
export class UpdatePetComponent implements OnInit {
  pet: any=null;
  errors: any={};

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _http: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params: Params) => {
      this._http.getPet(params.id).subscribe((response: any)=> {
        this.pet = response.pet;
      })
    })
  }

  handleSubmit(id) {
    this._http.updatePet(id, {
      name: this.pet.name,
      type: this.pet.type,
      description: this.pet.description,
      skill1: this.pet.skill1,
      skill2: this.pet.skill2,
      skill3: this.pet.skill3
    }).subscribe((response: any) => {
      if(response.hasOwnProperty('errors')){
        this.errors = response.errors;
      } else {
        this._router.navigate(['/pets/' + id]);
      }
    })
  }

  // cancel-button
  goToIndex() {
    this._router.navigate(['/pets/']);
  }

  // edit-button
  // goToEdit(id) {
  //   this._http.updatePet(this.pet._id, {
  //     name: this.pet.name,
  //     type: this.pet.type,
  //     description: this.pet.description,
  //     skill1: this.pet.skill1,
  //     skill2: this.pet.skill2,
  //     skill3: this.pet.skill3
  //   }).subscribe((response: any) => {
  //     if(response.hasOwnProperty('errors')){
  //       this.errors = response.errors;
  //     } else {
  //       this._router.navigate(['/pets/' + id]);
  //     }
  //   })
  // }

}
