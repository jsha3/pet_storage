import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-show-pet',
  templateUrl: './show-pet.component.html',
  styleUrls: ['./show-pet.component.css']
})
export class ShowPetComponent implements OnInit {
  pet: any = [];


  constructor(
    private _activatedRoute: ActivatedRoute,
    private _http: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params: Params) => {
      console.log(params);
      this._http.getPet(params.id).subscribe((response: any)=> {
        this.pet = response.pet;
      })
    })
  }
  

  // getPet (id) {
  //   this._http.getPet(id).subscribe((response: any) => {
  //     console.log('got pets!')
  //     this.pet = response.pet;
  //   });
  // }



    // adopt-button
    adoptPet(id) {
      this._http.deletePet(id).subscribe(response => {
        this._router.navigate(['/pets/']);
      })
    }

}
