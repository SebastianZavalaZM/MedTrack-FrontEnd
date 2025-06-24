import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Enfermedad } from '../models/enfermedad';
import { Subject } from 'rxjs';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class EnfermedadService {

  private listaCambio = new Subject<Enfermedad[]>()

  private url = `${base_url}enfermedades`; 

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Enfermedad[]>(`${this.url}/listas`);
  }
  insert(t: Enfermedad) {
  return this.http.post(`${this.url}/registra`, t);
  }

  setList(listaNueva: Enfermedad[]) {
    this.listaCambio.next(listaNueva)
  }
  getList() {
    return this.listaCambio.asObservable()
  }

  listId(id: number) {
    return this.http.get<Enfermedad>(`${this.url}/${id}`);
  }

  update(t: Enfermedad) {
    return this.http.put(this.url, t);
  }

  deleteS(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  
}
