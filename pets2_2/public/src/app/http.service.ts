import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  delete(arg0: string[]) {
    throw new Error("Method not implemented.");
  }

  constructor(private _http: HttpClient) { }


  // GET
  getPets() {
    return this._http.get('/api/pets')
  }

  // DELETE
  deletePet(id) {
    return this._http.delete('/api/pets/' + id);
  }

  // SHOW
  showPet(id) {
    return this._http.get('/api/' + id);
  }

  // GET ONE PET BY ID
  getPet(id) {
    return this._http.get('/api/pets/' + id);
  }

  // CREATE NEW PET
  createPet(pet) {
    return this._http.post('/api/pets', pet);
  }

  // UPDATE
  updatePet(id, pet) {
    return this._http.put('/api/pets/' + id, pet);
  }



}
