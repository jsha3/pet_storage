import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {
  pet: any;
  errors: any={};

  constructor(
    private _http: HttpService, 
    private _router: Router) { }

  ngOnInit() {
    this.pet = {
      name: '',
      type: '',
      description: '',
      skill1: '',
      skill2: '',
      skill3: ''
    }
  }

  handleSubmit() {
    this.errors = {};
    this._http.createPet(this.pet).subscribe((response: any) => {
      if(!response.hasOwnProperty ('errors')) {
        this._router.navigate(['/pets/'])
      } else {
        console.log(response.errors);
        this.errors = response.errors;
      }
    })
  }

  // cancel-button
  goToIndex() {
    this._router.navigate(['/pets/']);
  }


}
