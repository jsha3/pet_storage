import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all-pets',
  templateUrl: './all-pets.component.html',
  styleUrls: ['./all-pets.component.css']
})
export class AllPetsComponent implements OnInit {
  pets: any = [];

  constructor(
    private _http: HttpService, 
    private _router: Router
    ) { }


  ngOnInit() {
    this.getPets()
  }

  // Get pets to show on table on initiation
  getPets () {
    this._http.getPets().subscribe((response: any) => {
      console.log('got pets!')
      this.pets = response.pets;
    });
  }

  // edit-button
  goToEdit(id) {
    this._router.navigate(['/pets/' + id + '/edit']);
  }

  // details-button
  goToShow(id) {
    this._router.navigate(['/pets/' + id]);
  }



}
